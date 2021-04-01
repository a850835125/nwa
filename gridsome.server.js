// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`{
      allStrapiProject {
        edges {
          node {
            pid
          }
        }
      }
      allStrapiJournal {
        edges {
          node {
            slug
          }
        }
      }

    }`)

    const projects = data.allStrapiProject.edges 

    const journals = data.allStrapiJournal.edges

    projects.forEach((project) => {
      createPage({
        path: `/projects/${project.node.pid}`,
        component: "./src/templates/Projects.vue",
        context: {
          pid: project.node.pid
        }
      })
    })

    journals.forEach((journal) => {
      createPage({
        path: `/journal/${journal.node.slug}`,
        component: './src/templates/Journal.vue',
        context: {
          slug: journal.node.slug
        }
      })
    })
  })
}
