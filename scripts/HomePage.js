import Button from 'react-bootstrap/lib/Button';

var HomePage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Test App</h1>

      </div>
    );
  }
});

var LoginButton = React.createClass({
  onLoginClicked: function() {
    // TODO
  },
  render: function() {
    return (
      <Button bsStyle="success" bsSize="small" onClick={this.onLoginClicked}>
        Login With Facebook
      </Button>
    );
  }
});

ReactDOM.render(
  <HomePage/>,
  document.getElementById('content')
);
