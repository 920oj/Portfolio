<template>
  <div class="about">
    <myHeader />
    <b-container>
      <section class="aboutme">
        <h3 class="section_title">About me</h3>
        <b-row>
          <b-col md="3" class="flex">
            <img src="@/assets/img/jpg/oj-icon.jpg" alt="icon" id="icon">
          </b-col>
          <b-col md="9" id="ov">
            <div class="name">
              <h2 style="margin-bottom: 0; font-weight: 700;">大岩 潤矢 (Junya Oiwa)</h2>
              <p style="color: #777; font-weight: 700;">a.k.a. OJ(おーじぇい)</p>
            </div>
            <div class="description">
              <p>1999/9/20生まれ。20歳。愛知県出身、現在横浜市在住。</p>
              <p>東京都市大学 メディア情報学部 社会メディア学科 2年生。</p>
              <p>大学入学と共にプログラミングを始め、JavascriptとPythonを中心に学習中。</p>
              <p>「とりあえず手を動かす」をモットーに、どんな現場にも対応できるエンジニアになるべく頑張っています。</p>
            </div>
            <div class="sns">
              <a href="https://twitter.com/920oj" target="_blank"><i class="fab fa-twitter-square fa-fw sns_icon"></i></a>
              <a href="https://github.com/920oj" target="_blank"><i class="fab fa-github-square fa-fw sns_icon"></i></a>
              <i class="fas fa-envelope fa-fw sns_icon" v-b-modal.modal-1></i>
              <b-modal id="modal-1" title="メールアドレス" ok-only ok-title="閉じる">
                <p class="my-4">0920oiwa(atmark)gmail.com</p>
              </b-modal>
            </div>
          </b-col>
        </b-row>
      </section>

      <section class="career">
        <h3 class="section_title">Career</h3>
        <b-table striped hover :items="career_data" :fields="career_fields"></b-table>
      </section>
      
      <section class="skills">
        <h3 class="section_title">Skills</h3>
        <b-row>
          <b-col md="3" cols="6" v-for="(item, id) in skill_data" :key="id">
            <skill :svg="item.svg" :title="item.title" :rank="item.rank" :description="item.description" />
          </b-col>
          <!-- <b-col md="3" cols="6">
            <skill svg="/img/icon/html5.svg" title="HTML5" rank="3" description="2015.4～" />
          </b-col>
          <b-col md="3" cols="6">
            <skill svg="/img/icon/css3.svg" title="CSS3" rank="3" description="2015.4～" />
          </b-col>
          <b-col md="3" cols="6">
            <skill svg="/img/icon/javascript.svg" title="JavaScript" rank="2" description="2018.4～" />
          </b-col>
          <b-col md="3" cols="6">
            <skill svg="/img/icon/javascript.svg" title="JavaScript" rank="2" description="2018.4～" />
          </b-col> -->
        </b-row>
      </section>

    </b-container>
  </div>
</template>

<script>
import myHeader from '@/components/myheader.vue'
import skill from '@/components/skill.vue'

export default {
  components: {
    myHeader,
    skill
  },
  data() {
    return {
      career_fields: ['年月', '内容'],
      career_data: [
        {'年月': '2015.4', '内容': '愛知県立半田高等学校 普通科 入学'},
        {'年月': '2018.4', '内容': '東京都市大学 メディア情報学部 社会メディア学科 入学'},
        {'年月': '2019.4', '内容': '学生プログラミング団体 Steg フロントエンド課 加入'},
      ],
      skill_data: [
        {svg: 'html5.svg', title: 'HTML5', rank: '3', description: '2015.4～'},
        {svg: 'css3.svg', title: 'CSS3', rank: '3', description: '2015.4～'},
        {svg: 'javascript.svg', title: 'JavaScript', rank: '2', description: '2018.4～'},
        {svg: 'html5.svg', title: 'HTML5', rank: '3', description: '2015.4～'},
        {svg: 'html5.svg', title: 'HTML5', rank: '3', description: '2015.4～'},

      ]
    }
  }
}
</script>

<style>
#icon {
  width: 100%;
}

section {
  margin-bottom: 50px;
}
.about {
  font-family: 'Noto Sans JP', sans-serif;
}

.description p {
  margin-bottom: 0;
}

@media screen and (max-width: 767px){
  #icon {
    width: 70%;
    text-align: center;
    margin-bottom: 30px;
  }

  .flex {
    display: flex;
    justify-content: center;
  }

  #ov {
    margin: 0 10px;
  }
}

.sns {
  margin-top: 10px;
  font-size: 2em;
  text-decoration: none;
}

.sns a{
  color: #212529;
}

.sns_icon {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all  0.3s ease;
}

.sns_icon:hover {
  color: #22A6E0;
}


#ov {
  border: solid 1px #DEE2E6;
  padding: 10px;
}



.section_title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
}
</style>
