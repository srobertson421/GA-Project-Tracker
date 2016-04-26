Meteor.publish('admin.classes', function() {
  return Class.find({editors: {$in: [this.userId]}});
});

Meteor.publish('admin.admins', function() {
  if(Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.users.find({roles: {$in: ['admin']}});
  }
});

Meteor.publish('admin.students', function() {
  if(Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.users.find({roles: {$in: ['student']}});
  }
});

Meteor.publish('public.classes', function() {
  return Class.find();
});

Meteor.publish('student.classes', function(email) {
  return Class.find({students: {$in: [email]}});
});

Meteor.publish('student.projects', function() {
  return Projects.find();
});