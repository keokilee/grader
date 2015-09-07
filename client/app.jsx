'use strict';

let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

// counter starts at 0
Session.setDefault('counter', 0);

let Main = React.createClass({
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
      <div>
        <AppBar title="grades" showMenuIconButton={false}></AppBar>
        <Home />
        <footer>
          <h1>Stuff</h1>
        </footer>
      </div>
    );
  }
});

Meteor.startup(() => {
  React.render(<Main />, document.getElementById('content'));
});
