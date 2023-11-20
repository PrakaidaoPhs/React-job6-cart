import React from 'react';
import initialCatalog from './initialCatalog';

export class CatalogItem extends React.Component {
    state = { index: 0, show: false, showP: false };

    // ฟังก์ชันนี้ใช้สำหรับเปิด/ปิดการแสดงรายละเอียด
    handleClickShow = () => {
        this.setState({ show: !this.state.show });
    };

    // ฟังก์ชันนี้ใช้สำหรับเปิด/ปิดการแสดงคุณสมบัติ
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
                    {/* ปุ่มเพื่อเปิด/ปิดการแสดงรายละเอียด */}
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => this.handleClickShow() ? this.state.show : !this.state.show}
                    >
                        {this.state.show ? 'ซ่อน' : 'แสดง'} รายละเอียด
                    </button> &nbsp;

                    {/* ปุ่มเพื่อเปิด/ปิดการแสดงคุณสมบัติ */}
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => this.handleClickShowProperty() ? this.state.showP : !this.state.showP}
                    >
                        {this.state.showP ? 'ซ่อน' : 'แสดง'} คุณสมบัติ
                    </button>

                    {/* แสดงรายละเอียดถ้า this.state.show เป็น true */}
                    {this.state.show && <p className="card-text mt-1">{product.details}</p>}

                    {/* แสดงคุณสมบัติถ้า this.state.showP เป็น true */}
                    {this.state.showP && 
                        <p className="card-text mt-1">
                            <b>SKU</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.SKU}
                            <br/><b>ประเภท</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.type}
                            <br/><b>ยี่ห้อ</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.Brand}
                            <br/><b>เพศ</b> &nbsp;&nbsp;&nbsp;&nbsp;{product.gender}
                        </p>
                    }

                    <br />

                    {/* ปุ่ม Add to Cart */}
                    <button
                        type="button"
                        className="btn btn-outline-danger mt-3"
                        onClick={() => addToCart(product)}
                    >
                        เพิ่มลงในตะกร้า
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
                    {/* สร้าง CatalogItem สำหรับแต่ละสินค้าใน initialCatalog */}
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
