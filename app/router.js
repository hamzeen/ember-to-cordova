import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('login');
  this.route('page-not-found', { path: '/*wildcard' });
  this.route('create-contact');
  this.route('show-contacts');
});

export default Router;
