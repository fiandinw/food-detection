const vision = require('@google-cloud/vision');

const recoginition = async (query) => {
    const arr = []
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.labelDetection(query);
    const labels = result.labelAnnotations;
    labels.forEach(label => arr.push(label.description));
    return arr
}

module.exports = recoginition