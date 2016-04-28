import React from "react";

export default class PriceInput extends React.Component
{
    constructor(props)
    {
       super(props);
    }

    render()
    {
        return <span className="rateInput">
                <input type="text"
                       className="rateInputComp"/>
                <input type="button"
                       value="&#x25B4;"
                       className="rateInputButton"
                       style={{top: 0, display: this.props.hovered ? 'inline' : 'none'}}/>
                <input type="button"
                       value="&#x25BE;"
                       className="rateInputButton"
                       style={{bottom: 0, display: this.props.hovered ? 'inline' : 'none'}}/>
            </span>;
    }
}
