import { GraphQLNonNull, GraphQLID } from 'graphql';

import Cupon from '../../../models/cupons';
import { CuponsType } from '../../types/cupons';

const querySingleCupon = {
  type: CuponsType,
  args: {
    id: {
      name: 'ID',
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const cupon = Cupon.findById(params.id).exec();
    return cupon;
  }
};

export default querySingleCupon;
