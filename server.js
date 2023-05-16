const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/routes')
const blogRoute = require('./routes/blogRoutes')
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (err)=>console.error(err))
db.once('open', ()=>console.log('Database Connected'))

app.use('/api/v1/user', userRoute)
app.use('/api/v1/blog', blogRoute)

app.listen(process.env.PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, App is listening on port "+ process.env.PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
