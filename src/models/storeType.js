import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StoreTypeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { collection: 'StoreType', timestamps: true }
);

export default mongoose.model('StoreType', StoreTypeSchema);
