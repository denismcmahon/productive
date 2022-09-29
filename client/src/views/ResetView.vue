<template>
  <div>
    <h2>Reset password</h2>
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-white bg-primary">
          <h4>Reset password</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="resetPassword">
            <div class="form-group">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                v-model="password"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="confirm_password">Confirm Password</label>
              <input
                id="confirm_password"
                type="password"
                placeholder="Confirm Password"
                name="confirm_password"
                v-model="confirm_password"
                class="form-control"
              />
            </div>
            <button class="btn btn-primary">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  data() {
    const route = useRoute();
    return {
      token: route.params.token,
      password: '',
      confirm_password: '',
    };
  },
  methods: {
    ...mapActions(['sendResetMail']),
    resetPassword() {
      let resetData = {
        token: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
      };
      this.sendResetMail(resetData).then((res) => {
        if (res.data.success) {
          this.$router.push('login');
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
