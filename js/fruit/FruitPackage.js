import React from 'react';

export default class FruitPackage extends React.Component
{
    static propTypes = {
        title: React.PropTypes.string,
        image: React.PropTypes.string,
        qty: React.PropTypes.number,
        price: React.PropTypes.number
    };

    static defaultProps = {
        title: "",
        image: "",
        qty: 0,
        price: 0
    };

    state = {
        qty: this.props.qty
    };

    constructor(props)
    {
        super(props);
        this.increaseQty = ::this.increaseQty;
        this.decreaseQty = ::this.decreaseQty;
    }

    increaseQty()
    {
        this.setState({qty: this.state.qty + 1});
    }
    decreaseQty()
    {
        let newQty = this.state.qty > 0 ? this.state.qty - 1 : 0;
        this.setState({qty: newQty});
    }
    recalculateTotal()
    {
        return this.state.qty * this.props.price;
    }

    render() {
        return <article className="row large-4">
            <figure className="text-center">
                <p>
                    <img src={this.props.image}/>
                </p>
                <figcaption>
                    <h2>{this.props.title}</h2>
                </figcaption>
            </figure>
            <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

            <p className="large-4 column">
                <button onClick={this.increaseQty} className="button success">+</button>
                <button onClick={this.decreaseQty} className="button alert">-</button>
            </p>

            <p className="large-4 column"><strong>Price per item:</strong> ${this.props.price}</p>

            <h3 className="large-12 column text-center">
                Total: ${this.recalculateTotal()}
            </h3>

        </article>;
    }
}
