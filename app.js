// TODO
var App = () => (
    <div> 
        <h2> My Grocery List</h2>
        <GroceryList items={['pineapples', 'cashews', 'oranges']}/>
    </div>
    );

var GroceryList = (props) => (
    <ul>
      {props.items.map(item => 
        <GroceryListItem item={item} key={item}/>
        )}
    </ul>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bought: false,
      hover: false
    };
  }
  onListItemClick() {
    this.setState({
      bought: !this.state.bought
    });
  }
  onHover() {
    this.setState({
      hover: !this.state.hover
    });
  }
  render() {
    var style = {
      textDecoration: this.state.bought ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
