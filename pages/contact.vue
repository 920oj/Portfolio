<template>
  <div class="contact">
    <myHeader />
    <div class="con animated fadeIn">
      <b-container>
        <h2 id="contact_title">お問い合わせ</h2>
        <form v-if="!isSubmitted" name="contactForm" action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdU_6pnmkvOTKFCGzhvH8ooZrub5SW_shrXMXJ4zfktjf6KyA/formResponse" method="POST">
          <div class="field">
            <p class="field_label">お名前</p>
            <b-form-input type="text" rules="required" v-model="form_name" name="entry.1158105261" fieldname="お名前"></b-form-input>
            <p class="field_error" v-if="name_err">お名前を入力してください。</p>
          </div>

          <div class="field">
            <p class="field_label">メールアドレス</p>
            <b-form-input type="email" rueles="required|email" v-model="form_email" name="entry.1136389358" fieldname="メールアドレス"></b-form-input>
            <p class="field_error" v-if="email_err">有効なメールアドレスを入力してください。</p>
          </div>

          <div class="field">
            <p class="field_label">お問い合わせ内容</p>
            <b-form-textarea rules="required" v-model="form_message" name="entry.1764824192" fieldname="お問い合わせ内容" rows="10"></b-form-textarea>
            <p class="field_error" v-if="message_err">メッセージ内容を入力してください。</p>
          </div>
          
          <div class="submit">
            <b-button block variant="info" @click="submitData" v-if="!invaild">送信</b-button>
            <b-button v-if="invaild" disabled block variant="info">送信</b-button>
            <p v-if="invaild">すべて必須項目です。入力し終えると送信ボタンが有効化されます。</p>
          </div>
        </form>
        <iframe name="hiddenIframe" frameborder="0" style="display: none;"></iframe>
        <div v-if="isSubmitted" class="animated fadeIn" style="margin-top: 30px;">
          <p>お問い合わせありがとうございました。確認次第、メールアドレス宛にご返信させていただきます。</p>
          <p>一週間経っても返信がない場合、もう一度お問い合わせをご送信いただくか、<a href="https://twitter.com/920oj" target="_blank">Twitter</a>までご連絡ください。</p>
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
      form_name: '',
      form_email: '',
      form_message: '',
      isSubmitted: false,
    }
  },
  computed: {
    invaild () {
      if(this.name_err === false && this.email_err === false && this.message_err === false){
        return false;
      }
      else {
        return true;
      }
    },
    name_err () {
      if(this.form_name != '') {
        return false;
      } 
      else {
        return true;
      }
    },
    email_err () {
      if(this.form_email != '' && this.form_email.match(/.+@.+\..+/) != null) {
        return false;
      }
      else {
        return true;
      }
    },
    message_err () {
      if(this.form_message != '') {
        return false;
      } 
      else {
        return true;
      }
    }
  },
  methods: {
    submitData() {
      document.contactForm.submit();
      this.isSubmitted = true;
    }
  }
}
</script>

<style>

#contact_title {
  font-weight: 700;
  text-align: center;  
}
.con {
  font-family: 'Noto Sans JP', sans-serif;
}
.field {
  margin: 30px 0;
  font-weight: 700;
}

.field_error {
  color: #dc3545;
}

.submit {
  margin-bottom: 30px;
}
</style>
