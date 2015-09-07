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

  styles: {
    hero: {
      background: 'url(/images/background.jpg)',
      backgroundSize: 'cover',
      minHeight: '600px',
      height: '80%'
    },
    introText: {
      paddingTop: '20%',
      color: 'white',
      textAlign: 'center'
    },
    title: {
      fontSize: '3.0rem',
      marginBottom: '20px'
    },
    subtitle: {
      fontSize: '1.5rem'
    }
  },

  render() {
    return (
      <div>
        <AppBar title="Grades"></AppBar>
        <div style={this.styles.hero}>
          <div style={this.styles.introText}>
            <h1 style={this.styles.title}>Grades (Tentative)</h1>
            <h2 style={this.styles.subtitle}>
              Check your current grades. Find out when they change.
            </h2>
          </div>
        </div>
      </div>
    );
  }
});

Meteor.startup(() => {
  React.render(<Counter />, document.getElementById('content'));
});
