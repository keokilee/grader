const { RaisedButton } = MUI;
const { Navigation } = ReactRouter;

Home = React.createClass({
  mixins: [Navigation, ReactCSS.mixin],
  classes() {
    return {
      default: {
        hero: {
          background: 'url(/images/background.jpg)',
          backgroundSize: 'cover',
          minHeight: '600px',
          height: '80%',
          margin: '-8px'
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
          fontSize: '1.5rem',
          marginBottom: '20px'
        },
        button: {
          marginLeft: '30px'
        }
      }
    }
  },

  teacherLogin() {
    this.transitionTo('teachers/login');
  },

  render() {
    return (
      <div style={this.css().hero}>
        <div style={this.css().introText}>
          <h1 style={this.css().title}>Grades (Tentative)</h1>
          <h2 style={this.css().subtitle}>
            Check your current grades. Find out when they change.
          </h2>
          <RaisedButton label="Student login" primary={true} />
          <RaisedButton style={this.css().button} label="Teacher login" secondary={true} onClick={this.teacherLogin}/>
        </div>
      </div>
    );
  }
});
