/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  'createClass': function(newClass) {
    if(Roles.userIsInRole(Meteor.userId(), 'admin')) {
      newClass.createdBy = Meteor.userId();
      newClass.editors = [Meteor.userId()];
      Class.insert(newClass);
    }
  },

  'updateClass': function(updatedClass, classId) {
    if(Roles.userIsInRole(Meteor.userId(), 'admin')) {
      Class.update({_id: classId}, {$set: {
        name: updatedClass.name,
        "staff.instructors": updatedClass.staff.instructors,
        "staff.producers": updatedClass.staff.producers,
        students: updatedClass.students
      }});
    }
  },

  'createProject': function(newProject) {
    if(Roles.userIsInRole(Meteor.userId(), 'student')) {
      newProject.owner = Meteor.userId();
      Projects.insert(newProject);
    }
  },

  'inviteAdmin': function(email) {
    if(Roles.userIsInRole(Meteor.userId(), 'admin')) {
      Meteor.users.update({"emails.address": email}, {$set: {roles: ["admin"]}})
    }
  },

  'removeAdmin': function(email) {
    if(Roles.userIsInRole(Meteor.userId(), 'admin')) {
      Meteor.users.update({"emails.address": email}, {$set: {roles: ["student"]}})
    }
  }
});
