import DS from 'ember-data';

export default DS.Model.extend({
  grasshopper: DS.attr(),
  qtitle: DS.attr(),
  qbody: DS.attr(),
  qnotes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})

});
