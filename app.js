// TODO
var App = () => (
    <div> 
        <h2> My Grocery List</h2>
        <GroceryList/>
    </div>
    );

var GroceryList = () => (
    <ul>
    <GroceryListItem items={['pineapples', 'cashews', 'oranges']}/>
    </ul>
    );

var Pineapples = () => (
    <li> pineapples </li>
);

var Cashews = () => (
    <li> cashews </li>
); 

var GroceryListItem = (props) => (
    <ul>
        <li>{props.items[0]}</li>
        <li>{props.items[1]}</li>
        <li>{props.items[2]}</li>
    </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));
