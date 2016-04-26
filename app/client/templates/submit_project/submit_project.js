/*****************************************************************************/
/* SubmitProject: Event Handlers */
/*****************************************************************************/
Template.SubmitProject.events({
  'submit #new-project-form': function(e) {
    e.preventDefault();

    var newProject = {
      name: $('#project-name').val(),
      github: $('#project-github').val(),
      url: $('#project-url').val(),
      projectNum: $('#project-number').val()
    }

    Meteor.call('createProject', newProject, function() {
      Router.go('profile');
    });
  }
});

/*****************************************************************************/
/* SubmitProject: Helpers */
/*****************************************************************************/
Template.SubmitProject.helpers({
});

/*****************************************************************************/
/* SubmitProject: Lifecycle Hooks */
/*****************************************************************************/
Template.SubmitProject.onCreated(function () {
});

Template.SubmitProject.onRendered(function () {
});

Template.SubmitProject.onDestroyed(function () {
});
