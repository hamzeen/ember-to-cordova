import Ember from 'ember';

export function toCamelCase(params) {
  return params.toString().classify();
}

export default Ember.Helper.helper(toCamelCase);
