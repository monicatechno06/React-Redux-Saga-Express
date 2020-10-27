const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors({ origin: true }))

app.get('/pizza/coupons', (req, res) => {
  res.send({
    name:'Festive Offer',
    discount: 20
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})