// This is used in CLI, it's not a module so I cannot import ./api functions
const rss = require('rss')
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.resolve(process.cwd(), '_posts')

// setup our feed instance with some high level data
// I often keep this kind of data in package.json or a config file
// so that it can be shared with other things that need it, i.e. next-seo

const { RSS_TITLE, RSS_DESCRIPTION, RSS_FEED_URL, RSS_SITE_URL, RSS_IMAGE_URL, RSS_MANAGING_EDITOR, RSS_WEB_MASTER } = process.env

const feed = new rss({
  title: RSS_TITLE,
  description: RSS_DESCRIPTION,
  feed_url: RSS_FEED_URL,
  site_url: RSS_SITE_URL,
  image_url: RSS_IMAGE_URL,
  managingEditor: RSS_MANAGING_EDITOR,
  webMaster: RSS_WEB_MASTER,
  copyright: new Date().getFullYear() + ' Jesse Boyer',
  language: 'en',
  pubDate: new Date().toLocaleString(),
  ttl: '60',
})

// read all the files in my blog post dir, however you can grab
// an array of data however, via node-fetch or json files, etc
// Ignore Posts starting with an "_" underscore, they are drafts
// let slugs = fs.readdirSync(postsDirectory)
// slugs = slugs.filter(slug => !slug.startsWith('_'))
// const posts = slugs.map((slug) => getPostBySlug(slug, false))
//     .sort((a, b) => (a.date > b.date ? -1 : 1))

let slugs = fs.readdirSync(postsDirectory)
slugs = slugs.filter(slug => !slug.startsWith('_'))
const postsData = slugs.map(slug => {
  // Iterate each file in the directory and get the front-matter
  const fullPath = path.join(postsDirectory, slug)
  const file = fs.readFileSync(fullPath, 'utf8')
  const realSlug = slug.replace(/\.mdx$/, '')
  const { data } = matter(file)
  return { ...data, realSlug }
})

  // .sort((a, b) => (a.date > b.date ? -1 : 1))
  // loop over each blog post and add it to our RSS feed
postsData.forEach((post, value) => {
    // title, description, and date are properties of my front matter
    // attributes. Yours might be different depending on your data structure
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `/posts/${post.slug}`,
      date: post.date,
    })
  })

  // TODO do it
  // LINK filename.txt

// Generate XML for RSS feed
const xml = feed.xml()

fs.writeFileSync(path.resolve(process.cwd(), 'public') + '/rss.xml', xml)
