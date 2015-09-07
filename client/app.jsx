'use strict';

// counter starts at 0
Session.setDefault('counter', 0);

let Counter = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      counter: Session.get('counter')
    };
  },

  handleClick() {
    Session.set('counter', Session.get('counter') + 1);
  },

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <p>You've pressed the button {this.data.counter} times.</p>
      </div>
    );
  }
});

Meteor.startup(() => {
  React.render(<Counter />, document.getElementById('content'));
});
