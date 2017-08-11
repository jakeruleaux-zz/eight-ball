import DS from 'ember-data';

export default DS.Model.extend({
  master: DS.attr(),
  qreply: DS.attr()
});
