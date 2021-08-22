const express = require("express")
const app = express();
const path = require('path')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


/**
 * Joining REACT and NODEJS
 */
app.use(express.static('client/build'));
app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`))