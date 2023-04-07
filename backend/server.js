const express = require('express')
const port = process.env.PORT || 3030
const dotenv = require("dotenv");
const Captcha = require("2captcha");
const fs = require("fs");
dotenv.config();

const app = express()
const solver = new Captcha.Solver(process.env.API_KEY);

console.log(process.env.API_KEY)
solver
	.imageCaptcha(fs.readFileSync("./captcha.jpeg", "base64"))
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.error(err.message);
	});

app.listen(port , ()=> {
    console.log(`server is runing on ${port}  , DB too is connected`)
})