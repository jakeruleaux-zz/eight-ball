import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
    var newQuestion = this.store.createRecord('question', params);
    newQuestion.save();
    this.transitionTo('index');
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

    destroyQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });  
     this.transitionTo('new-question');
    }
    }
    });
