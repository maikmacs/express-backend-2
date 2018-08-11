import { GraphQLNonNull, GraphQLID } from 'graphql';

import Order from '../../../models/orders';
import { OrdersType } from '../../types/orders';

const querySingleOrder = {
  type: OrdersType,
  args: {
    id: {
      name: 'ID',
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const order = Order.findById(params.id).exec();
    return order;
  }
};

export default querySingleOrder;
