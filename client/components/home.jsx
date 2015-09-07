Home = React.createClass({
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
      <div style={this.styles.hero}>
        <div style={this.styles.introText}>
          <h1 style={this.styles.title}>Grades (Tentative)</h1>
          <h2 style={this.styles.subtitle}>
            Check your current grades. Find out when they change.
          </h2>
        </div>
      </div>
    );
  }
});