import { GraphQLList } from 'graphql';

import Cupon from '../../../models/cupons';
import { CuponsType } from '../../types/cupons';

const queryAllCupons = {
  type: new GraphQLList(CuponsType),
  resolve() {
    const cupons = Cupon.find().exec();
    return cupons;
  }
};

export default queryAllCupons;
