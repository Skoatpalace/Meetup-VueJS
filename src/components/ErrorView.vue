<template>
    <div class="notFoundContainer">
      <div class="m-b-xxl">
        <h1 class="title">{{ title }}</h1>
        <router-link :to="{name: navigateToPage}" class="button is-primary center">{{ navigateToText }}</router-link>
      </div>
      <h2 class="subtitle"><span>🥺 </span> {{ status }} <span> 👎</span></h2>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true 
            },
            status: {
                type: String,
                required: true 
            },
            navigateToPage: {
                type: String,
                required: true 
            },
            navigateToText: {
                type: String,
                required: true 
            }
        },
        
    }
</script>

<style scoped>
  .title {
    font-size: 40px;
  }
  .subtitle {
    font-size: 140px;
    text-align: center;
  }
  .notFoundContainer {
    margin-top: 80px;
  }
</style>