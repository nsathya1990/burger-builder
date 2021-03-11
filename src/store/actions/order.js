import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData,
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error,
    };
};

export const purchaseBurgerStart = (orderData) => {
    return (dispatch) => {
        axios
            .post('/orders.json', orderData)
            .then((response) => {
                dispatch(purchaseBurgerSuccess(response.data, orderData));
                // this.setState({ loading: false });
                // this.props.history.push('/');
            })
            .catch((error) => {
                // this.setState({ loading: false });
                dispatch(purchaseBurgerFail(error));
            });
    };
};
