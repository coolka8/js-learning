import React from 'react';
import AmountInput from "./editors/AmountInput";
import PriceInput from "./editors/PriceInput";
import CurrencyPairInput from "./editors/CurrencyPairInput";
import StatusDisplay from "./editors/StatusDisplay";

require("./Grid.css");

export default class Grid extends React.Component
{
    render()
    {
        var items = [];
        for (var i = 0; i < 10; i++)
        {
            items.push(<Row key={i} id={i}/>);
        }
        return <div>
            <ul>
                {items}
            </ul>
        </div>;
    }
}

class Row extends React.Component
{
    state = {
        hovered: false
    };

    constructor()
    {
        super();
        this.mouseOverHandler = ::this.mouseOverHandler;
        this.mouseOutHandler = ::this.mouseOutHandler;
    }

    mouseOverHandler(event)
    {
        this.refs.item.style.backgroundColor = "#8AC3FF";
        this.setState({hovered: true});
    }

    mouseOutHandler(event)
    {
        this.refs.item.style.backgroundColor = "#ffffff";
        this.setState({hovered: false});
    }

    render()
    {
        return <li className="row"
                   ref="item"
                   onMouseOver={this.mouseOverHandler}
                   onMouseOut={this.mouseOutHandler}>
            <LabelEditor text={this.props.id}/>
            <AmountInput amount={100}/>
            <PriceInput hovered={this.state.hovered}
                price={1.00000}/>
            <CurrencyPairInput currencyPair="EURUSD"/>
            <StatusDisplay/>
        </li>;
    }
}

const LabelEditor = (props) => <div><label>{props.text}</label></div>;
