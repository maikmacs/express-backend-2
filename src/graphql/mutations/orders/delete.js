import { GraphQLNonNull, GraphQLID } from 'graphql';

import Orders from '../../../models/orders';
import { OrdersType, OrdersInputType } from '../../types/orders';

export default {
  type: OrdersType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const deleteOrder = Orders.findByIdAndRemove(params.id).exec();
    if (!deleteOrder) throw Error('Error at delete order');
    return deleteOrder;
  }
};
