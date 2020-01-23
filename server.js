// Dependencies
const express = require('express')

// Initializations 
const app = express()

// Global variables
const port = process.env.PORT || 3000

// Server running
app.listen(3000, () => console.log(`Running server on port ${port}`))

