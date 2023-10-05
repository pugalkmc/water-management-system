import express from 'express';
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Water Flow Monitoring System' });
});

// You can define additional routes for other pages or features here

export default router;
