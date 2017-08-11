import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
      },
    update(answer) {

      var params = {
        master: this.get('master'),
        qreply: this.get('qreply'),
        question: this.get('question')
      };
        this.set('updateAnswerForm', false);
        this.sendAction('update', answer, params);
    }
  }
});
