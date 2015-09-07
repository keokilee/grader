'use strict';

let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

// counter starts at 0
Session.setDefault('counter', 0);

let Counter = React.createClass({
  mixins: [ReactMeteorData],
  componentWillMount() {
    ThemeManager.setTheme(ThemeManager.types.LIGHT);
  },

  getMeteorData() {
    return {
      counter: Session.get('counter')
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  handleClick() {
    Session.set('counter', Session.get('counter') + 1);
  },

  render() {
    return (
      <AppBar title="Gradr"></AppBar>
    );
  }
});

Meteor.startup(() => {
  React.render(<Counter />, document.getElementById('content'));
});
