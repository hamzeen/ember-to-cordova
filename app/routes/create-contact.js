import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');
  },

  actions: {
    create: function() {
      var newContact = this.store.createRecord('contact');
      newContact.set("name", "Nigam");
      newContact.save().then(() => {
        this.transitionTo('index');
      });
    },
  },
});
