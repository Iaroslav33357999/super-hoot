// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Раздаем статические файлы из папки public
// Это надежнее, чем просто "templates", так принято в продакшене
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`-----------------------------------------------`);
    console.log(`Сервер запущен! Локально: http://localhost:${PORT}`);
    console.log(`Игра готова к работе.`);
    console.log(`-----------------------------------------------`);
