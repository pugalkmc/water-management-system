import mongoose from 'mongoose';

const sensorDataSchema = new mongoose.Schema({
  nodeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Node',
    required: true,
  },
  sensorId: {
    type: Number,
    required: true,
  },
  flowRate: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

export default SensorData;
