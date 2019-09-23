<template>
  <div class="about">
    <myHeader />
    <div class="abo">
      <b-container>
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
              <a href="https://twitter.com/920oj" target="_blank"><i class="fab fa-twitter-square fa-fw" id="tw"></i></a>
              <a href="https://github.com/920oj" target="_blank"><i class="fab fa-github-square fa-fw" id="gh"></i></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/myheader.vue'

export default {
  components: {
    myHeader
  }
}
</script>

<style>
#icon {
  width: 100%;
}

.abo {
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

#tw {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all  0.3s ease;
}

#tw:hover {
  color: #22A6E0;
}

#ov {
  border: solid 1px #DEE2E6;
  padding: 10px;
}

#gh {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all  0.3s ease;
}

#gh:hover {
  color: #22A6E0;
}
</style>
