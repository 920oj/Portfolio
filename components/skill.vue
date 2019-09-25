<template>
  <div class="skill_item">
    <img :src="'/img/icon/' + svg" alt="" class="skill_logo">
    <p class="skill_title">{{title}}</p>
    <p class="skill_rank" v-html="calcRank(rank)"></p>
    <p class="skill_description">{{description}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    props:[
        "svg","title","rank","description"
    ],
    methods: {
      calcRank: function(rank) {
        if(rank == 1){
          return '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
        }
        else if(rank == 2){
          return '<i class="fas fa-star"></i><i class="fas fa-star"></i></i><i class="far fa-star"></i>'
        }
        else if(rank == 3){
          return '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
        }
        else {
          
        }
      }
    }

}
</script>

<style>
.skill_logo {
  /* height: 250px; */
  height: 150px;
}

.skill_item {
  text-align: center;
  margin: 30px 0;
}

.skill_item p {
  margin-bottom: 5px;
}

.skill_title {
  font-size: 1.5em;
  font-weight: 700;
}
</style>