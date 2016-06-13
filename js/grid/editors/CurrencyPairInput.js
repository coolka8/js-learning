import React from "react";

export default class CurrencyPairInput extends React.Component
{
    state = {
        currencyPair: this.props.currencyPair
    };

    constructor (props) {
        super(props);
        this.changeHandler = ::this.changeHandler;
    }

    changeHandler(event) {
        this.setState({currencyPair: event.target.value});
    }

    render() {
        return <div className="currencyPairInput">
            <input className="amountEditorInput"
                   type="text"
                   value={this.state.currencyPair}
                   onChange={this.changeHandler}
            />
        </div>;
    }
}