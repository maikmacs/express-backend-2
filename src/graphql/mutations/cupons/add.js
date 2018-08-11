import { GraphQLNonNull } from 'graphql';

import Cupon from '../../../models/cupons';
import { CuponsType, CuponInputType } from '../../types/cupons';

export default {
  type: CuponsType,
  args: {
    data: {
      type: new GraphQLNonNull(CuponInputType)
    }
  },
  resolve(root, params) {
    const cupon = new Cupon(params.data);
    const newCupon = cupon.save();
    if (!newCupon) throw Error('Error al crear el servicio');
    return newCupon;
  }
};
