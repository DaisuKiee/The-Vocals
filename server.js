const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/creators', (req, res) => {
    res.render('creators');
});

app.get('/sponsors', (req, res) => {
    res.render('sponsors');
});

app.get('/terms', (req, res) => {
    res.render('terms');
});

app.get('/privacy', (req, res) => {
    res.render('privacy');
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('index');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
