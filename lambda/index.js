const sharp = require('sharp')
const aws = require('aws-sdk')
const s3 = new aws.S3()

const Bucket = 'samyang-bucket'
const transforms = [
  { name: 'w140', width: 140 },
  { name: 'w600', width: 600 },
]

exports.handler = async (event, context, callback) => {
  const key = event.Records[0].s3.object.key
  const sanitizedKey = key.replace(/\+/g, ' ')
  const parts = sanitizedKey.split('/')
  const filename = parts[parts.length - 1]

  try {
<<<<<<< HEAD
    console.log('Event Key[0]', event.Records[0])
    const Key = event.Records[0].s3.object.key
    console.log('Key', Key)
    const sanitizedKey = Key.replace(/\+/g, ' ')
    console.log('sanitizedKey', sanitizedKey)
    const KeyOnly = sanitizedKey.split('/')[1]
    console.log('KeyOnly', KeyOnly)
    console.log(`Image Resizing: ${KeyOnly}`)
    const image = await s3
      .getObject({ Bucket: 'samyang-bucket', Key: sanitizedKey })
      .promise()
=======
    const image = await s3.getObject({ Bucket, Key: sanitizedKey }).promise()
>>>>>>> 982a3b82d81951cf18de80b6642a50cd0336ad3b

    await Promise.all(
      transforms.map(async (item) => {
        const resizedImg = await sharp(image.Body)
          .resize({ width: item.width })
          .toBuffer()
        return await s3
          .putObject({
            Bucket,
            Body: resizedImg,
            Key: `${item.name}/${filename}`,
          })
          .promise()
      })
    )
    callback(null, `Success: ${filename}`)
  } catch (err) {
    callback(`Error resizing files: ${err}`)
  }
}
