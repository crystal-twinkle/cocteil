const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const data = require('./data.ts');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(methodOverride('_method'));

app.get("/api", (req, res) => {
  console.log("get request");
  res.send(data);
})


app.post("/api", (req, res)=> {
  console.log("post request", req.body)
  res.json(data);
})

const port = 5000;

app.listen(port, ()=> {
    console.log('server work ' + port);
})
