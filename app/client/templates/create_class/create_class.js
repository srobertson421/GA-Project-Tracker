/*****************************************************************************/
/* CreateClass: Event Handlers */
/*****************************************************************************/
Template.CreateClass.events({
  'submit #new-class-form': function(e) {
    e.preventDefault();

    var name = $('#title-input').val();

    var instructors = $('.instructor-select').toArray().map(function(elem, index) {
      return $(elem).val();
    });

    var producers = $('.producer-select').toArray().map(function(elem, index) {
      return $(elem).val();
    });

    var students = $('.student-select').toArray().map(function(elem, index) {
      return $(elem).val();
    });

    var newClass = {
      name: name,
      staff: {
        instructors: instructors,
        producers: producers
      },
      students: students
    }

    Meteor.call('createClass', newClass, function() {
      Router.go('home');
    });
  },

  'click .add-btn': function(e) {
    var type = e.target.id;

    if(type === 'add-instructor-btn') {
      $('#instructor-selects').append($('.instructor-select')[0].outerHTML);
    } else if (type === 'add-producer-btn') {
      $('#producer-selects').append($('.producer-select')[0].outerHTML);
    } else if (type === 'add-student-btn') {
      $('#student-selects').append($('.student-select')[0].outerHTML);
    } else {
      return;
    }
  }
});

/*****************************************************************************/
/* CreateClass: Helpers */
/*****************************************************************************/
Template.CreateClass.helpers({
  admins: function() {
    return Meteor.users.find({roles: {$in: ['admin']}});
  },

  students: function() {
    return Meteor.users.find({roles: {$in: ['student']}});
  },

  getEmail: function(emailsArr) {
    return emailsArr[0].address;
  }
});

/*****************************************************************************/
/* CreateClass: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateClass.onCreated(function () {
});

Template.CreateClass.onRendered(function () {
});

Template.CreateClass.onDestroyed(function () {
});
