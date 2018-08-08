import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    picture: {
      type: String,
      default:
        'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/521724-istock-545286388.jpg'
    },
    description: { type: String },
    type: { type: String }
  },
  { collection: 'Products', timestamps: true }
);

export default mongoose.model('Products', ProductsSchema);
