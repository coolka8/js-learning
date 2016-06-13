import React from "react";

export default class PriceInput extends React.Component
{
    state = {
        price: this.props.price
    };

    constructor(props)
    {
        super(props);
        this.changeHandler = ::this.changeHandler;
        this.incrementPrice = ::this.incrementPrice;
        this.decrementPrice = ::this.decrementPrice;
    }

    changeHandler(event) {
        this.setState({price: event.target.value});
    }

    incrementPrice() {
        var newPrice = this.state.price + 1;
        this.setState({price: newPrice});
    }

    decrementPrice() {
        var newPrice = this.state.price - 1;
        if (newPrice > 0) {
            this.setState({price: newPrice});
        }
    }

    render() {
        return <span className="priceInput">
                <input type="text"
                       className="rateInputComp"
                       value={this.state.price}
                       onChange={this.changeHandler}
                />
                <input type="button"
                       value="&#x25B4;"
                       className="rateInputButton"
                       style={{top: 0, display: this.props.hovered ? 'inline' : 'none'}}
                       onClick={this.incrementPrice}
                />
                <input type="button"
                       value="&#x25BE;"
                       className="rateInputButton"
                       style={{bottom: 0, display: this.props.hovered ? 'inline' : 'none'}}
                       onClick={this.decrementPrice}
                />
            </span>;
    }
}
