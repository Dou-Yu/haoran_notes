<template>
  <div>
    <div class="book_top">
      <div class="book_top_tools">
        <span class="book_top_title">
          浩然的笔记铺
        </span>
        <div class="book_top_login">
          <button :onclick="LoginSystem" class="book_top_login_button">
            本机登陆
          </button>
        </div>
      </div>
    </div>
    <div class="book_person_show">
      <div class="book_head">
        <img alt="logo" class="book_avatar" src="@/assets/Images/头像.png" />
        <div class="book_name">
          <span>爱小雨爱编程的豆豆</span>
          <p></p>
          <span class="">雨</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "Book",
  setup() {
    const router = useRouter();

    function LoginSystem() {
      router.push("/auth");
    }

    return { LoginSystem };
  }
};
</script>

<style scoped>
.book_top {
  width: 100%;
  height: 100px;
  display: flex;
  padding-top: 10px;
  justify-content: space-between;
}

.book_top_tools {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.book_top_title {
  padding-left: 30px;
  font-weight: bold;
  font-size: 30px;
  color: wheat;
  font-family: YuKyokasho;
}

.book_top_login {
  margin-right: 30px;
  height: 45px;
  display: flex;
  align-items: center;
}

.book_top_login_button {
  background-color: orange;
  color: wheat;
  border: 1px solid;
  border-radius: 6px;
}

.book_top_login_button:hover {
  background-color: #585588;
}

.book_person_show {
  display: flex;
  justify-content: center;
}

.book_head {
  height: 200px;
  background-color: #585588;
  width: 200px;
  text-align: center;
  border-radius: 18px;
}

.book_avatar {
  height: 130px;
  width: 130px;
  border: 2px orange solid;
  border-radius: 100px;
  position: relative;
  top: -65px;
}

.book_name {
  height: 70px;
  margin-top: -55px;
  color: wheat;
  font-weight: bold;
  font-family: "Fira Code";
}
</style>
