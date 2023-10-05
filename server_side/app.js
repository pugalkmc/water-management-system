import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'; // If needed for cross-origin requests

// Import your route handlers
import indexRouter from './routes/index';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS if needed
app.use(express.static('public')); // Serve static files (e.g., for frontend)

// Connect to MongoDB using mongoose
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes
app.use('/', indexRouter);

// Define API endpoints for ESP32 and ESP8266 data
app.post('/esp32-data', (req, res) => {
  // Handle data received from ESP32
  const { data } = req.body;
  console.log('Received data from ESP32:', data);
  // Save data to MongoDB or perform any other necessary actions
  res.status(200).json({ message: 'Data received from ESP32' });
});

app.post('/esp8266-data', (req, res) => {
  // Handle data received from ESP8266
  const { data } = req.body;
  console.log('Received data from ESP8266:', data);
  // Save data to MongoDB or perform any other necessary actions
  res.status(200).json({ message: 'Data received from ESP8266' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
