import { GraphQLNonNull } from 'graphql';

import Orders from '../../../models/orders';
import { OrdersType, OrdersInputType } from '../../types/orders';

export default {
  type: OrdersType,
  args: {
    data: {
      type: new GraphQLNonNull(OrdersInputType)
    }
  },
  resolve(root, params) {
    const order = new Orders(params.data);
    const newOrder = order.save();
    if (!newOrder) throw Error('Error at create order');
    return newOrder;
  }
};
