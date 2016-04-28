import React from "react";

export default class AmountEditor extends React.Component
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

    changeHandler()
    {
        this.setState({amount: this.refs.input.value});
    }

    render()
    {
        return  <span className="amountEditor">
            <input ref="input"
                   className="amountEditorInput"
                   type="text"
                   value={this.state.amount}
                   onChange={this.changeHandler}/>
        </span>;
    }
}
