import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
      },
    update(question) {

      var params = {
        grasshopper: this.get('grasshopper'),
        qtitle: this.get('qtitle'),
        qbody: this.get('qbody'),
        qnotes: this.get('qnotes')
      };
        this.set('updateQuestionForm', false);
        this.sendAction('update', question, params);
    }
  }
});
