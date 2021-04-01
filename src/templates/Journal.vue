<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="single-journal-header">
          <h1 class="single-journal-title">{{ singleJournal.node.title }}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">{{ singleJournal.node.author }}</span>
            </div>
            <div class="journal-date"><span class="label">Date</span>
              <div>{{ singleJournal.node.date }}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{ singleJournal.node.time }}</span>
            </div>
          </div>
        </div>
        <div class="journal-content">
          <div v-html="mdToHtml(singleJournal.node.content)"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
  query ($slug: String){
  journals: allStrapiJournal(filter: {slug: {eq: $slug}}) {
  edges {
  node {
  title
  content
  slug
  author
  date
  time
  }
  }
  }
  }
</page-query>
<script>
  import MarkdownIt from 'markdown-it'
  const md = new MarkdownIt()
  export default {
    name: 'JournalPage',
    metaInfo() {
      return {
        title: this.singleJournal.node.title
      }
    },
    computed: {
      singleJournal() {
        return this.$page.journals.edges[0]
      }
    },
    methods: {
      mdToHtml (markdown) {
        const result = md.render(markdown)
        const str = result.substr('src=')
        console.log(str)
        return result
      }
    }
  }
</script>

<style scope>

</style>