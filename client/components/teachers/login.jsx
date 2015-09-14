const { TextField, Paper, RaisedButton } = MUI;
const { Navigation } = ReactRouter;

TeacherLogin = React.createClass({
  mixins: [ ReactCSS.mixin, ReactMeteorData, Navigation ],
  getInitialState() {
    return {
      errors: ""
    }
  },

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  },

  componentDidMount() {
    // Check if we already have a user.
    if (this.data.currentUser) {
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
          maxWidth: '400px',
          textAlign: 'center'
        },
        submit: {
          textAlign: 'right',
          marginTop: '15px'
        },
        errors: {
          color: 'red',
          paddingBottom: '10px'
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
    this.setState({errors: ""});

    Meteor.loginWithPassword(this.state.email, this.state.password, err => {
      if (err) {
        this.setState({errors: "Your email and/or password is incorrect."});
      } else {
        this.transitionTo('teachers/dashboard');
      }
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
            <p style={this.css().errors}>
              {this.state.errors ? this.state.errors : ""}
            </p>
            <RaisedButton label="Log In" primary={true} onClick={this.login} />
          </div>
        </form>
      </Paper>
    );
  }
});
