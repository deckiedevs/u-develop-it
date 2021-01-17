const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database');

const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);

// default response for any other requests -- catch all
app.use((req, res) => {
    res.status(404).end();
});

// start server
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`);
    }); 
});