const color = {
    fg:{
        green:"\x1b[32m",
        red:"\x1b[31m",
    }
}



const express = require('express')
const app = express()
const router = require('./Routes/productRoutes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const Port = 3005
const cookieParser = require('cookie-parser')


const server = app.listen(Port,()=>{
    console.log(color.fg.green,'Listening on PORT '+Port+"  ✓")
})

app.use(cors({ origin: true, credentials: true }))

app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/',router)
app.use(cookieParser())

mongoose.connect(process.env.MONGOOSE_CONNECT)
.then(()=>{
    console.log(color.fg.green,'Connected To Database ✓')
})
.catch((error)=>{
    console.log(color.fg.red,'Unable To Connect To Database')
    console.error(error)
})

