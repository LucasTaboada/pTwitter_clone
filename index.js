const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());



app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`)
})