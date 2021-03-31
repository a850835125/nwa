<template>
  <Layout>
    <div class="container">
      <div class="contact-header">
        <h1 class="contact-title">打个招呼</h1>
        <p>给我留下您可能遇到的任何问题的说明，我会尽快与您联系。</p>
      </div>
      <form name="contact" class="contact-form">
        <div class="sender-info">
          <div>
            <label for="name" class="label">你的名字</label>
            <input type="text" name="name" v-model="contact.name">
          </div>
          <div>
            <label for="email" class="label">你的邮件</label>
            <input type="email" name="email" v-model="contact.email">
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">信息</label>
          <textarea name="message" v-model="contact.message"></textarea>
        </div>
        <button class="button" @click.prevent="onSubmit">Submit form</button>
      </form>
    </div>
  </Layout>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'ContactPage',
    metaInfo: {
      title: '意见收集'
    },
    data () {
      return {
        contact: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    methods: {
      async onSubmit () {
        try {
          const { data } = await axios.post(process.env.GRIDSOME_API_URL + '/contacts', this.contact)
          window.alert('提交成功')
          for (let key in this.contact) this.contact[key] = ''
        } catch (err) {
          window.alert('提交失败，请稍后重试')
        }       
      }
    }
  }
</script>