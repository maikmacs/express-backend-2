import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CuponsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    discount: { type: Number, required: true }
  },
  { collection: 'StoreType', timestamps: true }
);

export default mongoose.model('Cupons', CuponsSchema);
