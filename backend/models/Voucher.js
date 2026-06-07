const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pointsRequired: { type: Number, required: true },
  stock: { type: Number, required: true, default: 0 },
  image: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Voucher', voucherSchema);