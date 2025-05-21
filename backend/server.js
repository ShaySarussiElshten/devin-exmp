const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const skillRoutes = require('./routes/skills');
const sessionRoutes = require('./routes/sessions');

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json({ message: 'SkillSwap API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/sessions', sessionRoutes);

mongoose.connect(process.env.MONGO_URI || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
