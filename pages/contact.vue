<template>
  <div class="contact">
    <myHeader />
    <div class="con">
      <b-container>
        <h2>お問い合わせ</h2>

        <!--         
          <p>お名前</p>
          <validation-provider v-slot="{ errors }" rules="required" name="お名前">
          <b-form-input type="text" v-model="name"></b-form-input>
          <p v-show="errors.length" class="danger">
            {{ errors[0] }}
          </p>
          </validation-provider>

          <p>メールアドレス</p>
          <validation-provider v-slot="{ errors }" rules="required" name="メールアドレス">
          <b-form-input type="email"></b-form-input>
          <p v-show="errors.length" class="danger">
            {{ errors[0] }}
          </p>
          
          <p>お問い合わせ内容</p>
          <validation-provider v-slot="{ errors }" rules="required" name="お問い合わせ内容">
          <b-form-textarea></b-form-textarea>
          <p v-show="errors.length" class="danger">
            {{ errors[0] }}
          </p> 
        -->


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
      form_name: '',
      form_email: '',
      form_message: ''
    }
  }
}
</script>

<style>
.danger {
  color: #dc3545;
}
</style>
