const express = require('express')
const bodyParser = require('body-parser')
const calculatorRoutes = require('./routes/calculatorRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/calculate', calculatorRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})