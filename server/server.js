const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(methodOverride('_method'));

let data = [];
const dataFilePath = 'data.json';

if (fs.existsSync(dataFilePath) && !data.length ) {
  const jsonData = fs.readFileSync(dataFilePath, 'utf8');
  data = JSON.parse(jsonData);
}

app.get("/api", (req, res) => {
  console.log("get request");
  res.send(data);
})

app.post("/api", (req, res)=> {
  data.push(req.body)
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
  res.json(data);
})

const port = 5000;

app.listen(port, ()=> {
    console.log('server work ' + port);
})
