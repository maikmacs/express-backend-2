import { GraphQLNonNull, GraphQLID } from 'graphql';

import Orders from '../../../models/orders';
import { OrdersType, OrdersInputType } from '../../types/orders';

export default {
  type: OrdersType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(OrdersInputType)
    }
  },
  resolve(root, params) {
    return Orders.findByIdAndUpdate(
      params.id,
      { $set: { ...params.data } },
      { new: true }
    )
      .then(order => order)
      .catch(err => Error('Error at update off Order'));
  }
};
