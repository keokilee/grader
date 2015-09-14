'use strict';

const {Router, Route} = ReactRouter;
const {history} = ReactRouter.lib.HashHistory;

const { AppBar } = MUI;
let ThemeManager = new MUI.Styles.ThemeManager();

// counter starts at 0
Session.setDefault('counter', 0);

let Main = React.createClass({
  render() {
    return (
      <div>
        <AppBar title="grades"
                showMenuIconButton={false}
                iconElementRight={<Logout hasUser={!!Meteor.user()}/>}></AppBar>
        <div className="container">
          {this.props.children}
          <footer>
            <h1>Footer</h1>
          </footer>
        </div>
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
          <Route path="teachers">
            <Route path="dashboard" component={TeacherDashboard}></Route>
            <Route path="login" component={TeacherLogin}></Route>
          </Route>
        </Route>
      </Router>
    );
  }
});

Meteor.startup(() => {
  React.render(<AppRoutes />, document.body);
});
