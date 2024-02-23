const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  // Append the default value with md extensions
  compiler: {
    styledComponents: true
  }
})
