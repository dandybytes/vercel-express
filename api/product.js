const express = require('express')
const router = express.Router()

/**
 * GET product list
 *
 * @return product list | empty
 */
router.get('/', async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'product data'
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send('server error')
  }
})

module.exports = router