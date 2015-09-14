const { FlatButton } = MUI;
const { Navigation } = ReactRouter;

Logout = React.createClass({
  mixins: [Navigation, ReactCSS.mixin],

  classes() {
    return {
      default: {
        button: {
          backgroundColor: 'transparent',
          color: 'white',
          marginTop: '6px'
        }
      },
      'hasUser-false': {
        button: {
          display: 'none'
        }
      }
    }
  },


  logout() {
    Meteor.logout(err => {
      if (err)  {
        console.log(err);
      }

      this.transitionTo('/');
    });
  },

  render() {
    return (
      <FlatButton label="Log Out"
                  style={this.css().button}
                  onClick={this.logout} />
    );
  }
});
