/*****************************************************************************/
/* Student: Event Handlers */
/*****************************************************************************/
Template.Student.events({
});

/*****************************************************************************/
/* Student: Helpers */
/*****************************************************************************/
Template.Student.helpers({
  getEmail: function() {
    return this.emails[0].address;
  },

  projects: function(studentId) {
    return Projects.find({owner: studentId});
  }
});

/*****************************************************************************/
/* Student: Lifecycle Hooks */
/*****************************************************************************/
Template.Student.onCreated(function () {
});

Template.Student.onRendered(function () {
});

Template.Student.onDestroyed(function () {
});
