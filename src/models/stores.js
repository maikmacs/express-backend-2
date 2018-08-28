import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StoresSchema = new Schema(
  {
    name: { type: String, required: true },
    coordinates: { type: [Number], default: [0, 0] },
    adress: { type: String, required: true },
    email: { type: String },
    phone: { type: Number },
    type: [{ type: Schema.Types.ObjectId, ref: 'StoreTypes' }],
    score: {
      type: [
        {
          comment: String,
          stars: Number
        }
      ]
    },
    schedule: { type: String, required: true },
    description: { type: String, required: true },
    picture: {
      type: String,
      default: 'https://nl.freelogodesign.org/Content/img/logo-ex-5.png'
    },
    price: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: 'Products' }]
  },
  { collection: 'Stores', timestamps: true }
);

export default mongoose.model('Stores', StoresSchema);
