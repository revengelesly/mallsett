const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const file = require('./routes/api/profile');
const location = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const merchant = require('./routes/api/merchant');
const products = require('./routes/api/merchants/products');
const suggestions = require('./routes/api/merchants/suggestions');
const contents = require('./routes/api/admins/contents');

const app = express();

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

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/profile/file', file);
app.use('/api/profile/location', location);
app.use('/api/posts', posts);
app.use('/api/merchant', merchant);
app.use('/api/merchants/products', products);
app.use('/api/merchants/suggestions', suggestions);
app.use('/api/admins/contents', contents);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
