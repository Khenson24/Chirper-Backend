const express = require('express');
const router = express.Router();

const Item = require('../../models/items');

var a = window.document.getElementById('email').value
var b = window.document.getElementById('password').value

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items))

});



router.post('/', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    const newItem = new Item({
        email: req.body.email,
	    password: req.body.password
    });

    newItem.save().then(item => res.json(item));
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({ success: false}));
});


module.exports = router;