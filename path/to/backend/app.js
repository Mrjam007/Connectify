const express = require('express');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const http = require('http');
const config = require('./config');
// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
// ...

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
// ...

// MongoDB Connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Socket.io Setup
io.on('connection', (socket) => {
    console.log('New client connected');
    // Handle events
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    socket.on('joinRoom', ({ room }) => {
        socket.join(room);
    });

    socket.on('privateMessage', ({ room, message }) => {
        io.to(room).emit('message', message);
    });
});

const PORT = config.port || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 