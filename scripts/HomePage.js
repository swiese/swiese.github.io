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
      <button type="button" onClick={this.onLoginClicked}>Log in
      </button>
    );
  }
});

ReactDOM.render(
  <HomePage/>,
  document.getElementById('content')
);
