'use strict';

const {Router, Route} = ReactRouter;
const {history} = ReactRouter.lib.HashHistory;

let ThemeManager = new MUI.Styles.ThemeManager();
let AppBar = MUI.AppBar;

// counter starts at 0
Session.setDefault('counter', 0);

let Main = React.createClass({
  render() {
    return (
      <div>
        <AppBar title="grades" showMenuIconButton={false}></AppBar>
        {this.props.children}
        <footer>
          <h1>Footer</h1>
        </footer>
      </div>
    );
  }
});

let AppRoutes = React.createClass({
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
      <Router history={history}>
        <Route component={Main}>
          <Route path="/" component={Home}></Route>
          <Route path="teachers" component={TeacherDashboard}></Route>
        </Route>
      </Router>
    );
  }
});

Meteor.startup(() => {
  React.render(<AppRoutes />, document.body);
});
