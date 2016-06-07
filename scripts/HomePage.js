var HomePage = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Test App</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <HomePage/>,
  document.getElementById('content')
);
