const express = require('express')
const app = express()
const port = 3000

const inMemoryCreditScores = {
	"AAA12001": 550, // johndoe
	"AAA98121": 900, // peterparker
	"AAA65091": 850, // brucewayne
	"AAA78034": 850, // janedoe
	"AAA79811": 620, // clarkkent
}

app.get('/score/:socialNumber', (req, res) => {
    const socialNumber = req.params.socialNumber;
    if (socialNumber in inMemoryCreditScores) {
        console.log(`Credit score for ${socialNumber} is ${inMemoryCreditScores[socialNumber]}`);
        return res.status(200).json({ score: inMemoryCreditScores[socialNumber] });
    } else {
        console.log(`Credit score for ${socialNumber} not found!`);
        return res.status(404).json({});
    }
})

app.listen(port, () => {
    console.log(`Credit score service listening on port ${port}`)
})