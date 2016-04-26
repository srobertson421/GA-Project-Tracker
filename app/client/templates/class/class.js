/*****************************************************************************/
/* Class: Event Handlers */
/*****************************************************************************/
Template.Class.events({
});

/*****************************************************************************/
/* Class: Helpers */
/*****************************************************************************/
Template.Class.helpers({
  studentInfo: function(email) {
    return Meteor.users.findOne({"emails.address": email});
  },

  getProjects: function(studentId) {
    return Projects.find({owner: studentId});
  },

  getEmail: function() {
    return this.emails[0].address;
  }
});

/*****************************************************************************/
/* Class: Lifecycle Hooks */
/*****************************************************************************/
Template.Class.onCreated(function () {
});

Template.Class.onRendered(function () {
});

Template.Class.onDestroyed(function () {
});
