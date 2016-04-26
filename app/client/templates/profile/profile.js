/*****************************************************************************/
/* Profile: Event Handlers */
/*****************************************************************************/
Template.Profile.events({
  'submit #invite-admin-form': function(e) {
    e.preventDefault();

    var invitee = $('#invite-admin-form > select').val();

    Meteor.call('inviteAdmin', invitee, function() {
      $('#invite-message').removeClass('hide').addClass('show');
      setTimeout(function() {
        $('#invite-message').removeClass('show').addClass('hide');
      }, 1000)
    });
  },

  'submit #remove-admin-form': function(e) {
    e.preventDefault();

    var invitee = $('#remove-admin-form > select').val();

    Meteor.call('removeAdmin', invitee, function() {
      $('#remove-message').removeClass('hide').addClass('show');
      setTimeout(function() {
        $('#remove-message').removeClass('show').addClass('hide');
      }, 1000)
    });
  }
});

/*****************************************************************************/
/* Profile: Helpers */
/*****************************************************************************/
Template.Profile.helpers({
  classes: function() {
    var userEmail = Meteor.user().emails[0].address;
    return Class.find({$or: [
      {"staff.instructors": {$in: [userEmail]}},
      {"staff.producers": {$in: [userEmail]}},
      {"students": {$in: [userEmail]}}
    ]});
  },

  users: function() {
    return Meteor.users.find({roles: {$in: ['student']}});
  },

  admins: function() {
    return Meteor.users.find({roles: {$in: ['admin']}});
  },

  getEmail: function(emailsArr) {
    return emailsArr[0].address;
  },

  projects: function() {
    return Projects.find({owner: Meteor.userId()});
  }
});

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.Profile.onCreated(function () {
});

Template.Profile.onRendered(function () {
});

Template.Profile.onDestroyed(function () {
});
