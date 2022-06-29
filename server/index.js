const express = require('express')
const path = require('path')

const app = express()

app.get('/', (reg,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

//dirname is file path we're currently in aka desktop/devmountain/week6

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})