<template>
  <div class="works">
    <myHeader />
    <div class="myworks animated fadeIn">
      <b-container>
      <h2 class="title">Works</h2>
      <div id="cards">
        <b-row>
          <b-col md="6" v-for="(item, id) in works_data" :key="id">
            <b-card
              :title="item.title"
              :img-src="'/img/works/' + item.image"
              img-alt="Image"
              img-top
              tag="article"
              class="card"
            >
              <b-card-text>
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
      works_data: [
        {'title': 'Memottoko!', 'tags': ['HTML', 'Bootstrap', 'JavaScript'], 'image': 'memottoko.png', 'url': 'https://920oj.net/memottoko/', 'description': 'Memottoko!は、JavaScriptで作られた簡易メモアプリです。LocalStorageを使用しており、同一端末内ならメモの内容を保存することができます。大学一年時に、学校の課題で製作しました。'},
        {'title': 'TCU100円朝食Bot', 'tags': ['Python', 'AWS'], 'image': 'bfb.png', 'url': 'https://github.com/920oj/TCU-YC-Breakfast-Notify-Bot', 'description': '大学の学食で提供されている100円朝食のメニューを毎朝7時30分に取得し、LINE Notifyで通知してくれるbotです。Pythonで書かれており、AWS Lightsailサーバー上にホストして、cronで定期実行しています。'},
        {'title': 'TCU-Timetable-Helper', 'tags': ['Vue.js', 'Nuxt.js', 'Bootstrap'], 'image': 'tth.png', 'url': 'https://tcu-timetable-helper.netlify.com/', 'description': '大学の講義一覧を時間割と照らし合わせ、Webアプリ化しました。さらに、現在の単位習得状況から不足単位数を自動計算し、確認しながら履修を組むことができ、最後には今季履修する科目を時間割表の形で出力することができます。'},
        {'title': '920oj.net', 'tags': ['Vue.js', 'Nuxt.js', 'Bootstrap', 'AWS'], 'image': '920oj.png', 'url': 'https://920oj.net/', 'description': 'このWebサイトです。Vue.jsとNuxt.jsを使って、自分のポートフォリオを作りました。'}
      ]
    }
  },
  created: function() {
    console.log(this.works_data);
    console.log(this.works_data[1]);
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
</style>
