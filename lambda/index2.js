const sharp = require('sharp')
const aws = require('aws-sdk')
const s3 = new aws.S3()

const transformationOptions = [
  { foldername: 'w140', width: 140 },
  { foldername: 'w600', width: 600 },
]

exports.handler = async (event) => {
  try {
    const Key = event.Records[0].s3.object.key
    console.log(Key)
    // const sanitizedKey = Key.replace(/\+/g, ' ')
    const KeyOnly = sanitizedKey.split('/')[1]
    console.log(`Image Resizing: ${KeyOnly}`)
    const image = await s3
      .getObject({ Bucket: 'samyang-bucket', Key: Key })
      .promise()

    console.log('Image', image)
    await Promise.all(
      transformationOptions.map(async ({ foldername, width }) => {
        try {
          const newKey = `${foldername}/${KeyOnly}`
          const resizedImage = await sharp(image.Body)
            .rotate()
            .resize({ width, height: width, fit: 'outside' })
            .toBuffer()

          await s3
            .putObject({
              Bucket: 'samyang-bucket',
              Body: resizedImage,
              Key: newKey,
            })
            .promise()
        } catch (err) {
          throw err
        }
      })
    )

    return {
      statusCode: 200,
      body: event,
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: event,
    }
  }
}
