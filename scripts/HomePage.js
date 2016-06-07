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
  render: function() {
    <Button bsStyle="success" bsSize="small" onClick={someCallback}>
      Something
    </Button>
  };
});

ReactDOM.render(
  <HomePage/>,
  document.getElementById('content')
);
