import mongoose from 'mongoose';
//Book schema having necesary details and reviews references
const PEInput = new mongoose.Schema({
  device_opn: String,
  version: String,
  quantity: Number,
  quantity_available: Number,
  pe_comment: String,
});

export const PE_Input = mongoose.model('pe_inputs', PEInput);

//user schema having necesary details and cart reference
const FieldInput = new mongoose.Schema({
    customer: String,
    device_opn: String,
    version: String,
    quantity_demand: Number,
    shipment_date: String,
    paid_samples: String,
    shipping_status: String,
    priority: Number,
    field_comment: String,

  });
  
  export const Field_Input = mongoose.model('field_inputs', FieldInput);

