const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('running on 3000')
});

app.get('/:id', (req, res) => {
    // console.log(req.params)
    const { id } = req.params;
    res.json({ id: `${id}`});
})