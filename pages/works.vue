<template>
  <div class="works">
    <myHeader />
    <div class="myworks animated fadeIn">
      <b-container>
      <h2 class="title">Works</h2>
      <div id="cards">
        <b-row>
          <b-col md="6" v-for="(item, id) in works_data" :key="id">
            <b-card :title="item.title" :img-src="item.image.url" img-alt="Image" img-top tag="article" class="card">
              <b-card-text>
                <p style="margin: 5px 0; font-size: 1rem;">
                  <b-badge variant="secondary" v-for="(tag, id) in item.tags" :key="id">{{tag}}</b-badge>
                </p>
                {{item.description}}
              </b-card-text>
              <b-button :href="item.url" variant="info" target="_blank" block>詳細</b-button>
            </b-card>
          </b-col>
        </b-row>
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
  data () {
    return {
      works_data: []
    }
  },
  created: function() {
    this.$axios.get(process.env.CMS_URL, {
      headers: {
        "X-API-KEY": process.env.CMS_API_KEY
      },
      data: {}
    })
    .then(response => {
      this.works_data = response["data"]["contents"];
      this.works_data.forEach(function(item){
        item.tags = item.tags.split(',');
      })
    })
  }
}
</script>

<style>
.title {
  text-align: center;
}

.card {
  margin: 15px 0;
}

.badge {
  margin-right: 5px;
}

.card-title {
  margin-bottom: 0px;
}
</style>