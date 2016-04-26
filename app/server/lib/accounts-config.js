Accounts.onCreateUser(function(options, user) {

  user.roles = ['student'];

  return user;
});