import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrdersSchema = new Schema(
  {
    store: { type: Schema.Type.ObjectId, ref: 'Store', required: true },
    user: { type: Schema.Type.ObjectId, ref: 'Users', required: true },
    products: [{ type: Schema.Type.ObjectId, ref: 'Products', required: true }],
    cupon: [{ type: Schema.Type.ObjectId, ref: 'Cupons' }],
    adress: { type: String, required: true },
    total: { type: Number, required: true },
    status_order: { type: String, enum: ['in_work', 'send', 'completed'] },
    status_pay: {
      type: Boolean,
      required: true,
      default: 0
    }
  },
  { collection: 'Orders', timestamps: true }
);

export default mongoose.model('Orders', OrdersSchema);
