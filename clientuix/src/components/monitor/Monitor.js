import React, { Component } from 'react';
import Caculator from './Caculator';
import ProductList from '../product/ProductList';
import axios from 'axios';

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
            orders: [],
            confirmed: false,
            msg: ''
        }
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);

    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        if (findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({
                product: product,
                quantity: 1
            });
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({
            totalPrice: totalPrice,
            orders: this.state.orders,
            confirmed: false
        });
        console.log(this.state.orders)
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId !== product.productId);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({
            totalPrice: totalPrice,
            orders: resultOrder,
            confirmed: false
        });
        console.log(this.state.orders)
    }

    cancelOrder() {
        this.setState({
            totalPrice: 0,
            orders: [],
            confirmed: false
        });
    }

    confirmOrder() {
        const { totalPrice, orders } = this.state;
        if (orders && orders.length > 0) {
            axios.post('http://localhost:3001/orders', {
                orderDate: new Date(),
                totalPrice,
                orders
            }).then(res => {
                this.setState({
                    totalPrice: 0,
                    orders: [],
                    confirmed: true,
                    msg: 'Your orders already confirmed.'
                });
            });
        } else {
            this.setState({
                confirmed: true,
                msg: 'Please create your order.'
            });
        }
    }

    render() {
        const { confirmed, msg } = this.state;
        return (
            <div className="container-fluid">
                { confirmed &&
                    <div className="alert alert-success title text-right" role="alert"> {msg}</div>
                }
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Caculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDeleteOrder={this.delOrder} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Monitor;