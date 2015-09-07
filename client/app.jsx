'use strict';

const {Router, Route} = ReactRouter;
const {history} = ReactRouter.lib.HashHistory;

let ThemeManager = new MUI.Styles.ThemeManager();
let AppBar = MUI.AppBar;

// counter starts at 0
Session.setDefault('counter', 0);

let Main = React.createClass({
  componentWillMount() {
    ThemeManager.setTheme(ThemeManager.types.LIGHT);
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div>
        <AppBar title="grades" showMenuIconButton={false}></AppBar>
        {this.props.children}
        <footer>
          <h1>Stuff</h1>
        </footer>
      </div>
    );
  }
});

Meteor.startup(() => {
  React.render((
    <Router history={history}>
      <Route component={Main}>
        <Route path="/" component={Home}></Route>
      </Route>
    </Router>
  ), document.body);
});
