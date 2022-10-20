<template>
  <q-page-container>
    <transition
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >
      <div class="form-wrap">
        <form action="" class="register">
          <p class="login-register">
            Already have an Account?
            <router-link class="router-link" :to="{ name: 'LoginPage' }"
              >Login</router-link
            >
          </p>
          <h2>Create an Account</h2>
          <div class="inputs">
            <div class="input">
              <q-input standout filled v-model="firstName" label="First Name">
                <template v-slot:prepend><q-icon name="fa-solid fa-user" /></template
              ></q-input>
            </div>
            <div class="input">
              <q-input standout filled v-model="lastName" label="Last Name">
                <template v-slot:prepend><q-icon name="fa-solid fa-user" /></template
              ></q-input>
            </div>
            <div class="input">
              <q-input standout filled v-model="username" label="Username">
                <template v-slot:prepend><q-icon name="fa-solid fa-user" /></template
              ></q-input>
            </div>
            <div class="input">
              <q-input standout filled v-model="email" label="Email">
                <template v-slot:prepend><q-icon name="mail" /></template
              ></q-input>
            </div>
            <div class="input">
              <q-input v-model="password" filled type="password" label="Password"
                ><template v-slot:prepend><q-icon name="fa-solid fa-lock" /></template
              ></q-input>
            </div>
          </div>

          <q-btn class="button q-mt-lg" unelevated rounded color="dark" label="Sign Up" />

          <router-link class="home" :to="{ name: 'Home' }">Home</router-link>

          <div class="angle"></div>
        </form>
        <div class="background">
          <q-carousel
            class="carousel"
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="3000"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide :name="1" img-src="../assets/carousel/carousel1.jpg" />
            <q-carousel-slide :name="2" img-src="../assets/carousel/carousel2.jpg" />
            <q-carousel-slide :name="3" img-src="../assets/carousel/carousel3.jpg" />
            <q-carousel-slide :name="4" img-src="../assets/carousel/carousel4.jpg" />
          </q-carousel>
        </div>
      </div>
    </transition>
  </q-page-container>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'RegisterPage',
  data() {
    return {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      password: null,
    };
  },

  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style lang="scss" scoped>
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }
  .login-register {
    margin-bottom: 20px;

    .router-link {
      color: #000;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 25px;
      font-weight: 700;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 30px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        margin-bottom: 5px;
      }
    }

    .button {
      width: 200px;
    }

    .home {
      margin-top: 20px;
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    width: 100%;
    height: 100%;
    max-height: 100vh;

    @media (min-width: 900px) {
      display: initial;
    }

    .carousel {
      height: 100%;
      max-height: 100vh;
    }
  }
}
</style>