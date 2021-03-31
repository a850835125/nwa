<template>
  <div class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link to="/" class="home-link active--exact active">
            <logo src="/assets/img/logo.svg" alt="Nichlas W. Andersen" class="logo"></logo>
          </g-link>
        </div>
        <nav class="nav right">
          <g-link to="/journals" class="nav">Journal</g-link>
          <g-link to="/contact" class="nav">Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot></slot>
    <footer class="footer">
      <div class="container"><span>Copyright © 2021</span></div>
    </footer>
  </div>
</template>

<script>
import Logo from '../assets/img/logo.svg'

export default {
  name: 'DefaultLayout',
  components: {
    Logo
  }
}
</script>


<style>

</style>