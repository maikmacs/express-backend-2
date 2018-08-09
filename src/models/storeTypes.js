import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StoreTypesSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  { collection: 'StoreTypes', timestamps: true }
);

export default mongoose.model('StoreTypes', StoreTypesSchema);
