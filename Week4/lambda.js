// dependencies
const ANS = require("aws-sdk");
const util = require("util");
const Jimp = require("jimp");

const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  const srcBucket = event.Records[0].s3.bucket.name;
  const srcKey = decodeURIComponent(
    event.Records[0].s3.object.key.replace(/\+/g, "")
  );
  const dstKey = "resized-" + srcKey;

  try {
    const params = {
      Bucket: srcBucket,
      key: srcKey,
    };
    origimage = await s3.getObject(params).promise();
  } catch (error) {
    console.log(error);
  }
};
