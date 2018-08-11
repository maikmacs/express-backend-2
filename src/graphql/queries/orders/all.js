import { GraphQLList } from 'graphql';

import Order from '../../../models/orders';
import { OrdersType } from '../../types/orders';

const queryAllOrders = {
  type: new GraphQLList(OrdersType),
  resolve() {
    const orders = Order.find().exec();
    return orders;
  }
};

export default queryAllOrders;
