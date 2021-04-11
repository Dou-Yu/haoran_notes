<template>
  <div class="auth">
    <div class="login_title">
      海上生明月,天涯共此时
    </div>
    <div class="login_content">
      <div class="login_content_input_content">
        <div class="login_content_input">
          <label>你是谁 : </label>
          <label>
            <input
              class="login_content_input_style"
              placeholder="用户名"
              v-model="userName"
            />
          </label>
        </div>
        <div class="login_content_input">
          <label>密码呢 : </label>
          <label>
            <input
              class="login_content_input_style"
              placeholder="密码"
              type="password"
              v-model="passWord"
            />
          </label>
        </div>
      </div>

      <div class="login_content_button_content">
        <button class="login_content_button">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "Login",
  setup() {
    const userName = ref("");
    const passWord = ref("");
    return { userName, passWord };
  }
};
</script>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.login_title {
  height: 100px;
  font-size: 25px;
  letter-spacing: 2px;
  font-family: AppleMyungjo;
}

.login_content {
  background-color: wheat;
  border-radius: 18px;
  border: 2px wheat double;
  height: 350px;
  width: 400px;
}

.login_content_input_content {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login_content_input {
  color: #585588;
  margin-top: 20px;
}

.login_content_input_style {
  height: 25px;
  width: 200px;
  border-radius: 6px;
  border-color: yellow;
}

.login_content_button_content {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

.login_content_button {
  width: 100px;
  height: 30px;
  border-radius: 6px;
  background-color: orange;
  color: wheat;
  font-weight: bold;
}

.login_content_button:hover {
  background-color: #585588;
}
</style>
