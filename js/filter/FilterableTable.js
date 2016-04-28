//var React = require('react');

import React, {Component} from 'react';

class FilterableTable extends React.Component
{
    constructor()
    {
        super();
        this.state = {searchText: "", showInStockOnly: false};
    }

    changeCallback(searchText, showInStockOnly)
    {
        this.setState({searchText, showInStockOnly});
    }

    render()
    {
        return <div>
            <SearchBox searchText={this.state.searchText}
                       showInStockOnly={this.state.showInStockOnly}
                       changeCallback={this.changeCallback.bind(this)}/>
            <Table data={this.props.data}
                   searchText={this.state.searchText}
                   showInStockOnly={this.state.showInStockOnly}/>
        </div>;
    }
}

class SearchBox extends React.Component
{
    changeHandler()
    {
        var searchText = this.refs.searchInput.value;
        var includeInStock = this.refs.searchCheckbox.checked;
        this.props.changeCallback(searchText, includeInStock);
    }

    render()
    {
        return <div>
            <input ref="searchInput"
                   placeholder="Search"
                   onChange={this.changeHandler.bind(this)}
                   value={this.props.searchText}/>
            <p>
                <label>
                    <input ref="searchCheckbox"
                              type="checkbox"
                              onChange={this.changeHandler.bind(this)}
                              checked={this.props.showInStockOnly}/>
                    Only include in stock
                </label>
            </p>
        </div>;
    }
}

class Table extends React.Component
{
    createRows()
    {
        var rows = [];
        var category;

        this.props.data.forEach(function(item) {
            var nameLower = item.name.toLowerCase();
            if (nameLower.indexOf(this.props.searchText.toLowerCase()) == -1 || this.props.showInStockOnly && !item.stocked) {
                return;
            }
            if (item.category != category) {
                category = item.category;
                rows.push(<RowCategory category={category}/>);
            }
            rows.push(<Row name={item.name} price={item.price} stocked={item.stocked}/>);
        }.bind(this));
        return rows;
    }

    render()
    {
        var rows = this.createRows();

        return <table>
            <thead>
            <tr>
                <th>Name</th><th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>;
    }
}

class RowCategory extends React.Component
{
    render()
    {
        return(<tr><th style={{textAlign:"left"}}>{this.props.category}</th></tr>);
    }
}

class Row extends React.Component
{
    render()
    {
        var namePart = this.props.stocked
            ? this.props.name
            : <span style={{color:"#ff0000"}}>{this.props.name}</span>;

        return <tr>
                <td>{namePart}</td><td>{this.props.price}</td>
            </tr>;
    }
}

export default FilterableTable;