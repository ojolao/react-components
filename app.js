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
  }
  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
