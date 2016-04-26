/*****************************************************************************/
/* EditClass: Event Handlers */
/*****************************************************************************/
Template.EditClass.events({
  'submit #edit-class-form': function(e) {
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

    var updatedClass = {
      _id: this._id,
      name: name,
      staff: {
        instructors: instructors,
        producers: producers
      },
      students: students
    }

    Meteor.call('updateClass', updatedClass, this._id, function() {
      Router.go('/class/' + updatedClass._id);
    });
  },

  'click .add-btn': function(e) {
    var type = e.target.id;

    if(type === 'add-instructor-btn') {
      $('#instructor-selects').append($('.instructor-select')[0].outerHTML)
      .append('<button type="button" class="delete-btn btn btn-danger">X</button>');
    } else if (type === 'add-producer-btn') {
      $('#producer-selects').append($('.producer-select')[0].outerHTML)
      .append('<button type="button" class="delete-btn btn btn-danger">X</button>');
    } else if (type === 'add-student-btn') {
      $('#student-selects').append($('.student-select')[0].outerHTML)
      .append('<button type="button" class="delete-btn btn btn-danger">X</button>');
    } else {
      return;
    }
  },

  'click .delete-btn': function(e) {
    $(e.target.previousElementSibling).remove();
    $(e.target).remove();
  }
});

/*****************************************************************************/
/* EditClass: Helpers */
/*****************************************************************************/
Template.EditClass.helpers({
  admins: function() {
    return Meteor.users.find({roles: {$in: ['admin']}});
  },

  allStudents: function() {
    return Meteor.users.find({roles: {$in: ['student']}});
  },

  getEmail: function(emailsArr) {
    return emailsArr[0].address;
  }
});

/*****************************************************************************/
/* EditClass: Lifecycle Hooks */
/*****************************************************************************/
Template.EditClass.onCreated(function () {
});

Template.EditClass.onRendered(function () {
});

Template.EditClass.onDestroyed(function () {
});
