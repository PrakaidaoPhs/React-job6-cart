import React from 'react';
import initialCatalog from './initialCatalog';

export class CatalogItem extends React.Component {
    state = { index: 0, show: false, showP: false };

    handleClickShow = () => {
        this.setState({ show: !this.state.show });
    };

    handleClickShowProperty = () => {
        this.setState({ showP: !this.state.showP });
    };

    render() {
        const { product, addToCart } = this.props;

        return (
            <div className="card mt-3">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">
                        {product.name} 
                    </h5>
                    <p className="card-text" style={{ margin: 0 }}>
                        {product.SKU}
                    </p>
                    <h4 className="card-text my-2">
                        ฿{product.price}
                    </h4>
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => this.handleClickShow() ? this.state.show : !this.state.show}
                    >
                        {this.state.show ? 'Hide' : 'Show'} Detail
                    </button> &nbsp;
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => this.handleClickShowProperty() ? this.state.showP : !this.state.showP}
                    >
                        {this.state.showP ? 'Hide' : 'Show'} Property
                    </button>
                    {this.state.show && <p className="card-text mt-1">{product.details}</p>}
                    {this.state.showP && 
                    <p className="card-text mt-1"><b>SKU</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.SKU}
                    <br/><b>type</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.type}
                    <br/><b>Brand</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.Brand}
                    <br/><b>gender</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.gender}</p>
                    }
                    <br />
                    <button
                        type="button"
                        className="btn btn-outline-danger mt-3"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        );
    }
}

export class Catalog extends React.Component {
    render() {
        const { addToCart } = this.props;

        return (
            <div className="container">
                <div className="row">
                    {initialCatalog.map(product => (
                        <div key={product.id} className="col-4">
                            <CatalogItem product={product} addToCart={addToCart} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
