<template>
  <div class="index">
    <myHeader />
    <div id="main">
      <b-container>
        <div id="quote">
          <div id="quote_p">
            <p>Webを作る。</p>
            <p>世界を創る。</p>
            <p id="description">Junya Oiwa's Portfolio</p>
          </div>
          
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
  }
}
</script>

<style>
#main {
  font-family: 'Noto Sans JP',sans-serif;
  text-align: center;
}

#quote {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  font-weight: 700;
  font-size: 50px;
  line-height: 90%;
  background-image: url('/img/cover.jpg');
  background-size: cover;
  background-position: center;
  /* background-position-y: -133px; */
}

#quote_p{
  /* backdrop-filter: hue-rotate(120deg); */
  backdrop-filter: brightness(20%);
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.6));
  padding: 15px;
  
}

#description {
  margin-bottom: 0px;
  font-size: 15px;
}

</style>
