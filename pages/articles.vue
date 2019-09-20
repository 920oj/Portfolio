<template>
  <div class="articles">
    <myHeader />
    <div id="main">
      <b-container>
        <div v-for="(items) in hatenaArticles" :key="items.id">
          <p>{{items.title}}</p>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/myheader.vue'

export default {
  components: {
    myHeader
  },
  data() {
    return {
      hatenaArticles: null,
    }
  },
  mounted() {
    const self = this;
    this.$axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2F920oj.hatenablog.com%2Frss')
      .then(function(response){
        console.log(response.data.items);
        self.hatenaArticles = response.data.items;
      })
      .catch(function(error){
        console.log(error);
      })
  }
}
</script>

<style>

</style>
