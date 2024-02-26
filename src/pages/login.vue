<template>
  <div class="login">
    <div class="login-form">
      <a-form :model="form" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
              autocomplete="off">
        <a-form-item label="Username" name="username"
                     :rules="[{ required: true, message: 'Please input your username!' }]">
          <a-input v-model:value="form.username" style="width: 220px"/>
        </a-form-item>

        <a-form-item label="Password" name="password"
                     :rules="[{ required: true, message: 'Please input your password!' }]">
          <a-input-password v-model:value="form.password"  style="width: 220px"/>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" @click="login">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>

  </div>
</template>

<script>
import {defineComponent, reactive, toRefs} from 'vue';
import {useRouter} from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const state = reactive({
      form: {
        username: '',
        password: '',
        remember: true,
      }
    });
    function login (values ) {
      console.log('Success:', values);
      router.push({name:'home'})
    }
    return {
      ...toRefs(state),
      login,
    }
  }
})

</script>

<style scoped lang="less">
.login {
  height: 100%;
  background: url("../assets/images/computer.jpg") no-repeat center;
  background-size: cover;
  position: relative;
  .login-form {
    width: 30%;
    background-color: #fff;
    padding: 80px 0;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 500px;
    opacity: .8 ;
  }
}

</style>
