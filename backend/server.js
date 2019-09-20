const express = require('express');
const app = express();
const login = require('./routes/login');
const signup = require('./routes/signup');
const viewProfile = require('./routes/viewprofile');
const removeTeam = require('./routes/leaveTeam');
const editProfile = require('./routes/editProfile');
//const createTeam = require('./routes/createTeam');
//const joinTeam = require('./routes/joinTeam');
const port = process.env.PORT || 8000;

app.use('/login', login);
app.use('/signup', signup);
app.use('/teams/leave', removeTeam);
app.use('/profile', viewProfile);
app.use('/profile/edit', editProfile);
//app.use('/teams/create', createTeam);
//app.use('/user/teams/join', joinTeam);
app.listen(port, () => console.log(`Server running on port ${port}`));