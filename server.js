const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const file = require('./routes/api/profile');
const location = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const merchant = require('./routes/api/merchant');
const products = require('./routes/api/merchants/products');
const suggestions = require('./routes/api/merchants/suggestions');
const contents = require('./routes/api/admins/contents');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mlab.uri.link;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// connect socket
merchant.connectSocket(io);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/profile/file', file);
app.use('/api/profile/location', location);
app.use('/api/posts', posts);
app.use('/api/merchant', merchant.router);
app.use('/api/merchants/products', products);
app.use('/api/merchants/suggestions', suggestions);
app.use('/api/admins/contents', contents);
