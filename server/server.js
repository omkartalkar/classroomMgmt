const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rakmo@29',
    database: 'classroom_management'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.get('/api/getRooms', (req, res) => {
    const query = 'SELECT * FROM rooms';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/api/bookRoom', (req, res) => {
    const { roomId, userId, bookingDate, timeSlot } = req.body;
    db.query('INSERT INTO bookings (room_id, user_id, booking_date, time_slot) VALUES (?, ?, ?, ?)',
        [roomId, userId, bookingDate, timeSlot],
        (err, result) => {
            if (err) throw err;
            db.query('UPDATE rooms SET is_available = 0 WHERE id = ?', [roomId], (err) => {
                if (err) throw err;
                res.json({ success: true });
            });
        });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
