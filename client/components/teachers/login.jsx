const { TextField, Paper, RaisedButton } = MUI;
const { Navigation } = ReactRouter;

TeacherLogin = React.createClass({
  mixins: [ ReactCSS.mixin, ReactMeteorData, Navigation ],

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  componentDidMount() {
    // Check if we already have a user.
    if (Meteor.user()) {
      this.transitionTo('teachers/dashboard');
    }
  },

  shouldComponentUpdate() {
    return !this.data.currentUser;
  },

  classes() {
    return {
      default: {
        login: {
          margin: '30px auto',
          padding: '15px 10px',
          maxWidth: '300px',
          textAlign: 'center'
        },
        submit: {
          textAlign: 'right',
          marginTop: '10px'
        }
      }
    }
  },

  updateEmail(e) {
    this.setState({email: e.target.value});
  },

  updatePassword(e) {
    this.setState({password: e.target.value});
  },

  login() {
    Meteor.loginWithPassword(this.state.email, this.state.password, err => {
      console.log(Meteor.user());
    });
  },

  render() {
    return (
      <Paper style={this.css().login} zDepth={2}>
        <h1>Teacher Login</h1>
        <form>
          <div>
            <TextField floatingLabelText="Email" onChange={this.updateEmail} />
          </div>
          <div>
            <TextField floatingLabelText="Password" type="password" onChange={this.updatePassword} />
          </div>
          <div style={this.css().submit}>
            <RaisedButton label="Log In" primary={true} onClick={this.login} />
          </div>
        </form>
      </Paper>
    );
  }
});
