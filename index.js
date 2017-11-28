const express = require('express')
const router = express.Router()


router.get('/Contacts', (req, res) =>{
    res.json({id : 1 , name: 'Thanapat'})
})

module.exports = router