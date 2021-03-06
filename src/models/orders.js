import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrdersSchema = new Schema(
  {
    store: { type: Schema.Types.ObjectId, ref: 'Store', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    products: [
      { type: Schema.Types.ObjectId, ref: 'Products', required: true }
    ],
    //cupon: { type: Schema.Types.ObjectId, ref: 'Cupons' },
    adress: { type: String, required: true },
    total: { type: Number, required: true },
    status_order: { type: String },
    status_pay: { type: String }
  },
  { collection: 'Orders', timestamps: true }
);

export default mongoose.model('Orders', OrdersSchema);
