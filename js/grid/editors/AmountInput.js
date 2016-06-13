import React from "react";

export default class AmountInput extends React.Component
{
    static propTypes = {
        amount: React.PropTypes.number
    };

    static defaultProps = {
        amount: NaN
    };

    state = {
        amount: this.props.amount
    };

    constructor(props)
    {
        super(props);
        this.changeHandler = ::this.changeHandler;
    }

    changeHandler(event)
    {
        this.setState({amount: event.target.value});
    }

    render()
    {
        return  <div className="amountInput">
            <input className="amountEditorInput"
                   type="text"
                   value={this.state.amount}
                   onChange={this.changeHandler}/>
        </div>;
    }
}
