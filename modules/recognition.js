const vision = require('@google-cloud/vision');

const recoginition = async () => {
    // console.log('recognition module')

    // Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs label detection on the image file
    const [result] = await client.labelDetection('./samples/1564879853.png');

    const labels = result.labelAnnotations;
    // console.log('Labels:');
    // labels.forEach(label => console.log(label.description));
    return labels
}

module.exports = recoginition