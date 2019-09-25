<template>
  <div class="skill_item">
    <img :src="svg" alt="" class="skill_logo">
    <p>{{title}}</p>
    <p>{{rank}}</p>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            svg: null,
            title: null,
            rank: 0,
            description: null
        }
    },
    props:[
        "svg","title","rank","description"
    ],

}
</script>

<style>
.skill_logo {
  height: 250px;
}
</style>