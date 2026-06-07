// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON bodies

// Routes
// We will create these files in the next step
// app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/categories', require('./routes/categoryRoutes'));
// app.use('/api/vouchers', require('./routes/voucherRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});