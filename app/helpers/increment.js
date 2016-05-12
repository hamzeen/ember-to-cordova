// app/helpers/increment.js
import Ember from "ember";

export function increment(integer){
  return ++integer;
}

export default Ember.Helper.helper(increment);
