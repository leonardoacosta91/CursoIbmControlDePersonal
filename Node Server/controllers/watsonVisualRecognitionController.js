const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const visualRecognition = new VisualRecognitionV3({
    version: process.env.WATSON_VISUAL_RECOGNITION_VERSION,
    authenticator: new IamAuthenticator({
        apikey: process.env.WATSON_VISUAL_RECOGNITION_APIKEY
    }),
    url: process.env.WATSON_VISUAL_RECOGNITION_URL,
});


let inputData = async (req, res) => {
    //console.log(req);
    console.log('function ask name started');
    let files = req.files;
    const classifyParams = {
        imagesFile: fs.createReadStream(files.imagen.path),
        //owners: ['me', 'IBM'],
        owners: ['me'],
        threshold: 0.0,
    };
    console.log('called visual recognition');
    visualRecognition.classify(classifyParams)
        .then(response => {
            const classifiedImages = response.result;
            //console.log(JSON.stringify(classifiedImages, null, 2));
            console.log('received visual recognition');
            res.send(classifiedImages);
        })
        .catch(err => {
            console.log('error:', err);
            res.send(err);
        });

}



module.exports = {
    inputData
}
