require('dotenv').config()
const app = require('./src/app');

app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
})