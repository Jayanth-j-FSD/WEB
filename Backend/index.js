const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
app.use(cors());
// Routes
const routes = require('./routes');
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
