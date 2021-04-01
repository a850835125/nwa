<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <h1 class="project-title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">{{ project.title }}</font>
            </font>
          </h1>
          <div class="project-info">
            <div class="categories-container">
              <div class="categories">
                <span class="label">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">分类目录</font>
                  </font>
                </span>
                <span class="category" v-for="category in project.categories" :key="category.title">
                  <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">{{ category.title }}</font>
                  </font>
                </span>
                <!-- <span class="category">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">黄</font>
                </font>
              </span> -->
              </div>
            </div>
            <div class="year-container"><span class="label">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">年</font>
                </font>
              </span>
              <div data-v-7f3c42a8="">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">{{ project.year }}</font>
                </font>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div v-html="mdToHtml(project.content)"></div>
        </div>
        <div class="content">
          <p>
            <img class="g-image g-image--lazy g-image--loaded" :src="getFullUrl(project.image.url)" width="2560">
          </p>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
  query ($pid: String) {
  project: allStrapiProject (filter: {pid: {eq: $pid}}){
  edges {
  node {
  title
  content
  image {
  url
  }
  categories {
  title
  }
  year
  }
  }
  }
  }
</page-query>
<script>
  import { getFullUrl, mdToHtml } from '../utils/utils.js'
  export default {
    name: 'ProjectPage',
    metaInfo() {
      return {
        title: this.project.title
      }
    },
    computed: {
      project() {
        return this.$page.project.edges[0].node
      }
    },
    methods: {
      getFullUrl,
      mdToHtml
    }
  }
</script>

<style scope>

</style>