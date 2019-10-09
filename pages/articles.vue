<template>
  <div class="articles">
    <myHeader />
    <div id="load" v-if="isLoaded">
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
    <div id="art" class="animated fadeIn" v-if="!isLoaded" style="margin-bottom: 30px;">
      <b-container>
        <div v-for="item in allArticles" :key="item.id">
          <a :href="item.link" target="_blank">
            <b-card>
              <b-media no-body>
                <b-media-aside>
                  <div style="width: 50px; height: 50px;">
                    <hatenaLogo style="width: 100%;" v-if="item.site === `hatena`" />
                    <img src="@/assets/img/png/qiita-square.png" style="width: 100%;" v-if="item.site === `qiita`">
                  </div>
                </b-media-aside>
                <b-media-body class="ml-3">
                  <h5 class="mt-0">{{item.title}}</h5>
                  <p class="item_date">{{item.date}}</p>
                </b-media-body>
              </b-media>
            </b-card>
          </a>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/myheader.vue'
import hatenaLogo from '@/assets/img/svg/hatena.svg'

export default {
  components: {
    myHeader,
    hatenaLogo,
  },
  data() {
    return {
      isLoaded: true,
      hatenaArticles: null,
      qiitaArticles: null,
      allArticles: []
    }
  },
  mounted() {
    const self = this;
    Promise.all([this.getHatena(),this.getQiita()])
    .then(function(){
      self.hatenaArticles.forEach(function(item){
        let tmp = {};
        tmp.site = "hatena";
        tmp.title = item.title;
        tmp.date = self.$moment(item.pubDate).format('YYYY/MM/DD hh:mm:ss');
        tmp.link = item.link;

        self.allArticles.push(tmp);
      })

      self.qiitaArticles.forEach(function(item){
        let tmp = {};
        tmp.site = "qiita";
        tmp.title = item.title;
        tmp.date = self.$moment(item.created_at).format('YYYY/MM/DD hh:mm:ss');
        tmp.link = item.url;

        self.allArticles.push(tmp);
      })

      self.allArticles.sort(function(a,b){
        return (a.date < b.date ? 1 : -1);
      })
    })
    .then(function(){
      self.isLoaded = false;
    })
  },
  methods: {
    getHatena() {
      const self = this;
      return new Promise(function(resolve, reject) {
        self.$axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2F920oj.hatenablog.com%2Frss&api_key=${process.env.RSS_KEY}&count=100`)
        .then(function(response){
          self.hatenaArticles = response.data.items;
          resolve();
        })
        .catch(function(error){
          console.log(error);
        })
      })
    },
    getQiita() {
      const self = this;
      return new Promise(function(resolve, reject){
        self.$axios.get('https://qiita.com/api/v2/items?page=1&per_page=100&query=user%3A920oj')
        .then(function(response){
          self.qiitaArticles = response.data;
          resolve();
        })
        .catch(function(error){
          console.log(error);
        })
      })
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

#load {
  text-align: center;
  display: flex;
  justify-content: center;

}
#art {
  font-family: 'Noto Sans JP', sans-serif;
}

.item_date {
  color: #777;
  font-size: 0.8em;
}


</style>
