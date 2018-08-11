import { GraphQLNonNull, GraphQLID } from 'graphql';

import Cupon from '../../../models/cupons';
import { CuponsType, CuponInputType } from '../../types/cupons';

export default {
  type: CuponsType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const deleteCupon = Cupon.findByIdAndRemove(params.id).exec();
    if (!deleteCupon) throw Error('Error al borrar la servicio');
    return deleteCupon;
  }
};
