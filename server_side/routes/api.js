import express from 'express';
import SensorData from '../models/SensorData';
import Node from '../models/Node';

const router = express.Router();

// Route to create new sensor data
router.post('/sensor-data', async (req, res) => {
  try {
    const { nodeId, sensorId, flowRate } = req.body;

    // Create and save new sensor data
    const newSensorData = new SensorData({
      nodeId,
      sensorId,
      flowRate,
    });
    await newSensorData.save();

    res.status(201).json(newSensorData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to retrieve sensor data
router.get('/sensor-data', async (req, res) => {
  try {
    // Fetch all sensor data
    const sensorData = await SensorData.find();

    res.status(200).json(sensorData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to create a new node
router.post('/nodes', async (req, res) => {
  try {
    const { nodeName, sensorIds } = req.body;

    // Create and save a new node with associated sensor IDs
    const newNode = new Node({
      nodeName,
      sensorIds,
    });
    await newNode.save();

    res.status(201).json(newNode);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to retrieve all nodes
router.get('/nodes', async (req, res) => {
  try {
    // Fetch all nodes
    const nodes = await Node.find();

    res.status(200).json(nodes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
