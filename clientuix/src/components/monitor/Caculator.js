import React, { Component } from 'react';
class Caculator extends Component {


    showOrders(orders) {
        if (!orders || orders.length == 0) {
            return <li className="text-right text-muted title">ไม่มีสินค้าค่ะ</li>
        } else {
            return orders.map(order => {
                return (
                    <li key={order.product.productId} className="text-right text-succes title">
                        {order.product.productName} x {order.quantity} = {order.quantity * order.product.unitPrice}
                        <button className="btn btn-light btn-sm"> x </button>
                    </li>
                );
            })
        }
    }

    render() {
        const { totalPrice, orders } = this.props;
        return (
            <div>
                <h1 className="text-right">{totalPrice}</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showOrders(orders)}
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title">Confirm</button>
                <button className="btn btn-block btn-secondary title">Cancel</button>
            </div>
        );
    }
}

export default Caculator;