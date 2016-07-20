Template.bCard.helpers({
  firstName: function() {
    return Session.get('firstName');
  },

  lastName: function() {
    return Session.get('lastName');
  },

  quote: function() {
    return Session.get('quote');
  },
  
  githublink: function() {
    return Session.get('githublink');
  }
});