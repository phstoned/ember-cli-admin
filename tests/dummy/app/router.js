import Ember from 'ember';
import MetaRoute from 'ember-cli-admin/dsl/meta-route';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
});

MetaRoute.map(Router, function() {
  this.route("dashboard", {path: "/"});
  this.resources("users");
  this.resources("cars");
  this.resources("user-categories");
  this.resources("catalogues");
});

export default Router;
