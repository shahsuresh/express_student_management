// npm i nodemon   :command to install nodemon
// nodemon => node monitor changes
import express from "express";

const app = express();
//to make app understand json
app.use(express.json());

//crud
let studentList = [
  {
    name: "Aakash",
    lname: "Shah",
    age: 22,
  },
];
// add student data through postman body

app.post("/student/add", (req, res) => {
  const newStudent = req.body;
  studentList.push(newStudent);
  //console.log(studentList);
  //return res.status(200).send("Adding Student...");
  return res.status(200).send({ message: "Student data added successfully" });
  console.log(studentList);
});

//get student list
app.get("/student/list", (req, res) => {
  return res.status(200).send(studentList);
});

//get student data by searching name
app.get("/student/details", (req, res) => {
  const studentName = req.body.name;
  const requiredStudent = studentList.find((item, index) => {
    if (item.name === studentName) {
      return item;
    }
  });
  if (!requiredStudent) {
    return res.status(404).send({ message: "Student doesnot exist" });
  }
  return res
    .status(200)
    .send({ message: "Success", studentData: requiredStudent });
});

// server and network port
const PORT = 8080; //4000-10,000

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
