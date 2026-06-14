const express = require('express')
const cors = require('cors')

const pool = require('./db')

// express backend app
const app = express()

// allows front end and backend to speak to each other while being on different ports
app.use(cors())


app.get('/products/featured', async (req, res) => {
    try {
        // Select all coloumns in products table from pg database
        const result = await pool.query('SELECT * FROM products WHERE featured = true')
        // return respomse object as a JSON so it can be returned in browser console
        res.json(result.rows)
    }
    catch (error) {
        console.log(error)
        // internal server error - return error text
        res.status(500).json({ error: 'Database Error' })
    }
})

app.get('/products', async (req, res) => {
    try {
        // Select all coloumns in products table from pg database
        const result = await pool.query('SELECT * FROM products')
        // return respomse object as a JSON so it can be returned in browser console
        res.json(result.rows)
    }
    catch (error) {
        console.log(error)
        // internal server error - return error text
        res.status(500).json({ error: 'Database Error' })
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params  // pull "5" out of /products/5

        // $1 is a placeholder. Passing id separately (not string-glued into the
        // query) is what protects you from SQL injection. Always do it this way.
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id])

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' })
        }

        // .rows is an array; we want the single object inside it
        res.json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Database Error' })
    }
})


// Start server on port 3000
app.listen(3000)