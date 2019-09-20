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
      qiitaArticles: null,
    }
  },
  mounted() {
    this.getHatena();
  },
  methods: {
    getHatena() {
      const self = this;
      this.$axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2F920oj.hatenablog.com%2Frss')
      .then(function(response){
        console.log(response.data.items);
        self.hatenaArticles = response.data.items;
        self.getQiita();
      })
      .catch(function(error){
        console.log(error);
        self.getQiita();
      })
    },
    getQiita() {
      const self = this;
      this.$axios.get('https://qiita.com/api/v2/items?page=1&per_page=100&query=user%3A920oj')
      .then(function(response){
        console.log(response.data);
        self.qiitaArticles = response.data;
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
}
</script>

<style>

</style>
