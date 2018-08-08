import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StoresSchema = new Schema(
  {
    name: { type: String, required: true },
    adress: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    type: { type: String, required: true },
    score: {
      type: [
        {
          comentario: String,
          estrellas: Number
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
    products: [{ type: Schema.Type.ObjectId, ref: 'Products', required: true }]
  },
  { collection: 'Stores', timestamps: true }
);

export default mongoose.model('Stores', StoresSchema);
