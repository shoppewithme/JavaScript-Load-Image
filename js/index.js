module.exports = {
  load: require('./load-image'),
  scale: require('./load-image-scale'),
  meta: require('./load-image-meta'),
  fetch: require('./load-image-fetch'),
  exif: require('./load-image-exif'),
  exifmap: require('./load-image-exif-map'),
  orientation: require('./load-image-orientation')
}
