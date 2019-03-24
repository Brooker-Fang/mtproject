<template>
  <div>
    <template v-if="user">
      {{user}}
    </template>
    <template v-else>
      <nuxt-link to = "" class="bluecolor">立即登录</nuxt-link>
      <nuxt-link to = "" class="bluecolor">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user:""
      }
    }
  }
</script>

<style scoped>
.bluecolor {
  color: deepskyblue;
}
</style>
