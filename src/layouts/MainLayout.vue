<template>
  <q-layout view="hHh lpR fff">
    <div v-if="postLoaded">
      <div>
        <MainNavigation v-if="!navigation" />
      </div>
      <router-view></router-view>
      <div>
        <MainFooter v-if="!navigation" />
      </div>
    </div>
  </q-layout>
</template>

<script>
import MainNavigation from '../components/MainNavigation.vue';
import MainFooter from '../components/MainFooter.vue';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useStore } from 'vuex';

export default {
  name: 'MainLayout',
  components: {
    MainNavigation,
    MainFooter,
  },

  setup() {
    const navigation = ref(null);
    const route = useRoute();
    const store = useStore();

    store.dispatch('getPost');

    firebase.auth().onAuthStateChanged((user) => {
      store.commit('updateUser', user);
      if (user) {
        store.dispatch('getCurrentUser');
      }
    });

    watch(route, () => {
      if (
        route.name === 'LoginPage' ||
        route.name === 'RegisterPage' ||
        route.name === 'ForgotPasswordPage'
      ) {
        navigation.value = true;
      } else {
        navigation.value = false;
      }
    });

    onMounted(() => {
      if (
        route.name === 'LoginPage' ||
        route.name === 'RegisterPage' ||
        route.name === 'ForgotPasswordPage'
      ) {
        navigation.value = true;
      } else {
        navigation.value = false;
      }
    });

    const postLoaded = computed(() => {
      return store.state.postLoaded;
    });

    return {
      route,
      navigation,
      postLoaded,
    };
  },
};
</script>
