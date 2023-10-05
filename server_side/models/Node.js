import mongoose from 'mongoose';

const nodeSchema = new mongoose.Schema({
  nodeName: {
    type: String,
    required: true,
  },
  sensorIds: [{
    type: Number,
    required: true,
  }],
  // Other fields specific to nodes
});

const Node = mongoose.model('Node', nodeSchema);

export default Node;
