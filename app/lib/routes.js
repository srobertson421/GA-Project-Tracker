var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
      if (!Meteor.userId()) {
        throwError('Please login!');
        Router.go('home');
      } else {
        this.next();
      }
    },

    adminRequired: function(pause) {
      if(!Roles.userIsInRole(Meteor.userId(), 'admin')) {
        throwError('Unauthorized! Admins only');
        Router.go('home');
      } else {
        this.next();
      }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['profile', 'createClass', 'submitProject', 'editClass']
});

Router.onBeforeAction(OnBeforeActions.adminRequired, {
    only: ['createClass', 'student', 'editClass']
});

Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('profile', {
  name: 'profile',
  controller: 'ProfileController',
  where: 'client'
});

Router.route('create_class', {
  name: 'createClass',
  controller: 'CreateClassController',
  where: 'client'
});

Router.route('submit_project', {
  name: 'submitProject',
  controller: 'SubmitProjectController',
  where: 'client'
});

Router.route('class/:id', {
  name: 'class',
  controller: 'ClassController',
  where: 'client'
});

Router.route('student/:id', {
  name: 'student',
  controller: 'StudentController',
  where: 'client'
});

Router.route('edit_class/:id', {
  name: 'editClass',
  controller: 'EditClassController',
  where: 'client'
});