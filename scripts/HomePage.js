var HomePage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Test App</h1>
        <LoginButton />
      </div>
    );
  }
});

var LoginButton = React.createClass({
  onLoginClicked: function() {
    FBPlatform.showLoginDialog();
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
