const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const Mydata = require("./models/mydataSchema");
app.set("view engine", "ejs");
app.use(express.static('public'))

//index
app.get("/", (req, res) => {
  //pour lin
  // res.send('<h1> hellook word kh </h1>')
  //pour un fille
  // res.sendFile("./views/Home.html", { root: __dirname });

  //using ejs

  Mydata.find()
    .then((result) => {console.log(result);
        //data basse
      res.render("index");

    })
    .catch((err) => {console.log(err);
    });
});

//add file
app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});
//edit
app.get("/user/Edit.html", (req, res) => {
  res.render("user/Edit");
});
//search file
app.get("/user/search.ejs", (req, res) => {
  res.render("user/search");
});
//view
app.get("/user/view.html", (req, res) => {
  res.render("user/view");
});

mongoose
  .connect(
    "mongodb+srv://khaoulabdd:3MIyXFzVGka7puN4@cluster0.cvwni.mongodb.net/testudemy?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// the samme "/" in form
app.post("/", (req, res) => {
  console.log(req.body);

  const Dataobject = new Mydata(req.body);
  Dataobject.save()
    .then(() => {
      res.redirect("/index.html");
    })
    .catch((err) => {
      console.log(err);
    });
});

//auto refresh

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});