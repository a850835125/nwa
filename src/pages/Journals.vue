<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
              聪明人曾经说过...
            </font>
          </font>
        </h1>
      </div>
    </div>
    <g-link :to="'/journal/' + journal.node.slug" class="journal-post" v-for="journal in $page.journals.edges" :key="journal.node.id">
      <div class="container journals">
        <h2 class="journals-title">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">{{ journal.node.title }}</font>
          </font>
        </h2>
        <p class="journals-excerpt">
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">{{ journal.node.shor_content }}</font>
          </font>
        </p>
      </div>
    </g-link>
  </Layout>
</template>
<page-query>
  query {
  journals: allStrapiJournal (order: ASC) {
  edges {
  node {
  id
  title
  shor_content
  slug
  }
  }
  }
  }
</page-query>
<script>
  export default {
    name: 'JournalListPage'
  }
</script>

<style>

</style>