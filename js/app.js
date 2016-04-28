import React from 'react';
import FilterableTable from './filter/FilterableTable';
import FruitPackage from './fruit/FruitPackage';
import Avatar from './avatar/Avatar';
import Grid from './grid/Grid';

var dataProvider = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    qty: 3,
    price: 8
};

class App extends React.Component {
    render() {
        return <div>
            <Grid/>
        </div>;
    }
}

/*

 <FruitPackage {...order}/>
 <Avatar pagename="Don Emilio"/>
 <FilterableTable data={dataProvider}/>


* */

export default App;