const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const carPost = path.resolve(`./src/templates/car-post.js`)
  const wallPost = path.resolve(`./src/templates/wall-post.js`)
  const result = await graphql(
    `
    query allArticleQuery {
        allMdx {
          edges {
            node {
              id
              slug
              frontmatter {
                title
                post
              }
            }
          }
        }
      }      
      
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post) => {

    console.log(post)

    if (post.node.frontmatter.post === 'wall-diffuser') {
      createPage({
        path: `wall-diffuser/${post.node.slug}`,
        component: carPost,
        context: {
          slug: `wall-diffuser/${post.node.slug}`,
          id: post.node.id
        },
      })
    } else {
      createPage({
        path: `car-diffuser/${post.node.slug}`,
        component: wallPost,
        context: {
          slug: `car-diffuser/${post.node.slug}`,
          id: post.node.id
        },
      })
    }

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `allMdx`) {
    const value = createFilePath({ node, getNode })
    console.log('value', value )
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}