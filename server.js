const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const port = 8999;

app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
  })
); // hbs.engine({extname : '.hbs',defaultLayout: 'main', layoutsDir : './views/layouts/'})
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("calculator", {
    show: false,
  });
});

app.get("/upload", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let ope = req.query.operation;
  let kq, check0, check1, check2, check3;
  switch (ope) {
    case "+":
      kq = num1 + num2;
      check0 = true;
      break;
    case "-":
      kq = num1 - num2;
      check1 = true;
      break;
    case "*":
      kq = num1 * num2;
      check2 = true;
      break;
    default:
      kq = num1 / num2;
      check3 = true;
      break;
  }
  res.render("calculator", {
    ketqua: kq,
    so1: num1,
    so2: num2,
    show: true,
    check0,
    check1,
    check2,
    check3,
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`\nlocalhost:${port}\n`);
});
