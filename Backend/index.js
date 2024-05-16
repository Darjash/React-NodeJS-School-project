const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL");
    
    db.query("CREATE DATABASE IF NOT EXISTS my_database", function (err, result) {
        if (err) throw err;
        console.log("Database created or already exists");
        
        db.query("USE my_database", function (err, result) {
            if (err) throw err;
            console.log("Using database");
            
            const createTableQuery = `CREATE TABLE  IF NOT EXISTS test_results (
                id INT AUTO_INCREMENT PRIMARY KEY,
                groupName VARCHAR(255),
                studentName VARCHAR(255),
                result INT
            )`;
            db.query(createTableQuery, function (err, result) {
                if (err) throw err;
                console.log("Table created or already exists");
            });
        });
    });
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/insert", (req, res) => {
    const groupName = req.body.groupName;
    const studentName = req.body.studentName;
    const score = req.body.result;
    const sqlInsert = 
    "INSERT INTO test_results (groupName, studentName, result) VALUES (?,?,?)";
    db.query(sqlInsert, [groupName, studentName, score], (err, sqlResult) => {
        console.log(sqlResult);
    });
});

const q = [
    { correctAnswer:"answer1.1", question:"quest1?", options: ["answer1.1", "answer1.2", "answer1.3"]},
    { correctAnswer:"answer2.1", question:"quest2?", options: ["answer2.1", "answer2.2", "answer2.3"]},
    { correctAnswer:"answer3.2", question:"quest3?", options: ["answer3.1", "answer3.2", "answer3.3"]},
    { correctAnswer:"answer4.3", question:"quest4?", options: ["answer4.1", "answer4.2", "answer4.3"]},
    { correctAnswer:"answer5.1", question:"quest5?", options: ["answer5.1", "answer5.2", "answer5.3"]},
    { correctAnswer:"answer6.2", question:"quest6?", options: ["answer6.1", "answer6.2", "answer6.3"]},
]

app.get('/questions', (req,res) =>{
    const clearData = q.map(({correctAnswer, ...rest})=> ({...rest}))
    res.send(clearData)
});


app.post('/check-answers', (req, res) => {
    const userAnswers = req.body.userAnswers;
    let correctPoints = 0;
    q.forEach((question, index) => {
        if (question.correctAnswer === userAnswers[index]) {
            correctPoints++;
        }
    });
    res.send({ correctPoints });
});


app.get("/api/get",authenticateToken, (req, res) => {
    const sqlSelect = 
    "SELECT * FROM test_results";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
        }
      res.send(result) 
    });
});


const user = { username: 'user123', password: '5566' };
const SECRET_KEY = '568nhf486hn57v6479753dg';
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === user.login && password === user.password) {
        const token = jwt.sign({}, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Wrong login or password' });
    }
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        next();
    });
}

app.listen(3001, () =>{
    console.log('running on port 3001')
});