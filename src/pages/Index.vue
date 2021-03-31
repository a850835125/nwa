<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">{{ general.title }}</h1>
        <h2 class="hero-subtitle">{{ general.content }}</h2>
      </div>
      <div class="projects">
        <div class="project" v-for="project in projects" :key="project.node.id">
          <g-link to="/projects/chelsea-landmark/" class="project-link">
            <img alt="Banana" :src="GRIDSOME_API_URL + project.node.image.url" width="2560" class="thumbnail g-image g-image--loaded">
            <h3 class="project-title">{{project.node.title}}</h3>
            <div class="categories">
              <span class="category" v-for="category in project.node.categories">{{category.title}}</span>
              <span class="category">pink</span>
            </div>
          </g-link>
        </div>
        <!-- <div class="project">
          <a href="/projects/sunk/" class="project-link">
            <img src="/img/pineapple.jpg" width="2560" class="thumbnail g-image g-image--loaded">
            <h3 class="project-title">Pineapple</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">blue</span>
            </div>
          </a>
        </div>
        <div class="project">
          <a href="/projects/3d-graff/" class="project-link">
            <img alt="Ice Cream" src="/img/ice-cream.jpg" width="2560" class="thumbnail g-image g-image--loaded">
            <h3 class="project-title">Ice Cream</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">yellow</span>
            </div>
          </a>
        </div>
        <div class="project">
          <a href="/projects/ios-concept/" class="project-link">
            <img alt="Porta400" src="/img/porta400.jpg" class="thumbnail g-image g-image--loaded" width="2560">
            <h3 class="project-title">Porta400</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">yellow</span>
            </div>
          </a>
        </div> -->
      </div>
    </div>

    <div >
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link to="/journal/gridsome-forestry-cms/" class="journal" v-for="journal in journals" :key="journal.node.id">
            <h3 class="journal-title">{{journal.node.title}}</h3>
          </g-link>
          <!-- <a href="/journal/use-gridsome-vuejs/" class="journal">
            <h3  class="journal-title">VueJS for your next project</h3>
          </a><a  href="/journal/macos-development-environment/" class="journal">
            <h3  class="journal-title">macOS development environment</h3>
          </a><a  href="/journal/a-journal-entry/" class="journal">
            <h3  class="journal-title">About Typography</h3>
          </a> -->
          </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
  query {
    # 获取首页图片信息
    projects: allStrapiProject (order: ASC) {
      edges {
        node {
          id
          title
          image {
            url
          }
          categories {
            title
          }
        }
      }
    }
    # 获取首页标题
    general: allStrapiIndexGeneral {
      edges {
        node {
          title
          content
        }
      }
    }
    # 获取文章标题信息
    journals: allStrapiJournal(order: ASC) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
</page-query>
<script>
  export default {
    metaInfo: {
      title: 'Hello, world!'
    },
    computed: {
      projects () {
        return this.$page.projects.edges
      },
      general () {
        return this.$page.general.edges[0].node
      },
      journals () {
        return this.$page.journals.edges
      }
    }
  }
</script>

<style>

</style>