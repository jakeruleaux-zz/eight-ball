import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQestion(params) {
      var newQestion = this.store.createRecord('question', params);
      var answer = params.answer;
      answer.get('answers').addObject(newQestion);
      newQestion.save().then(function() {
         return answer.save();
       });
      this.transitionTo('new-question', question)
     },
    update(question, params) {
    Object.keys(params).forEach(function(key) {
    if(params[key]!==undefined) {
      question.set(key,params[key]);
    }
    });
    question.save();
    this.transitionTo('new-question');
    },

    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        question.destroyRecord();
        this.transitionTo('new-question');
        }
      }
    }
});
