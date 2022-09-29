<template>
  <div>
    <h2>Forgot Password</h2>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Forgot Password</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="sendPasswordResetMail">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                v-model="email"
                class="form-control"
              />
            </div>
            <button class="btn btn-primary">Send Mail</button>
            <br /><br />
            <div>
              <h6>{{ mail_msg }}</h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      mail_msg: '',
    };
  },
  methods: {
    ...mapActions(['sendResetMail']),
    sendPasswordResetMail() {
      let data = {
        email: this.email,
      };
      this.sendResetMail(data).then((res) => {
        if (res.data.success) {
          this.mail_msg = res.data.msg;
        }
      });
    },
  },
};
</script>

<style>
.card {
  width: 60%;
  border-radius: 0;
}
.btn {
  border-radius: 0;
}
.card-header {
  border-radius: 0 !important;
}
.form-control {
  border-radius: 0;
}
</style>
