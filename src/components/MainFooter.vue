<template>
  <q-footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }"
            >JB <span class="header-span">BLOGS</span></router-link
          >
          <ul>
            <li>
              <a href="https://github.com/jeraldbianan?tab=repositories"
                ><i class="svg-icon fa-brands fa-github fa-lg"></i
              ></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jerald-bianan-865059254/"
                ><i class="svg-icon fa-brands fa-linkedin fa-lg"></i
              ></a>
            </li>
            <li>
              <a href="https://www.facebook.com/jerald.bianan/"
                ><i class="svg-icon fa-brands fa-facebook fa-lg" style="size: 150px"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home' }"
              ><i class="fa-solid fa-house fa-lg q-px-sm"></i>Home</router-link
            >
            <router-link class="link" :to="{ name: 'AboutPage' }"
              ><i class="fa-solid fa-address-card fa-lg q-px-sm"></i>About</router-link
            >
            <router-link class="link" :to="{ name: 'BlogsPage' }"
              ><i class="fa-solid fa-blog fa-lg q-px-sm"></i>Blogs</router-link
            >
            <router-link v-if="user" class="link" :to="{ name: 'CreatePostPage' }"
              ><i class="fa-solid fa-circle-plus fa-lg q-px-sm"></i>Create
              Post</router-link
            >
            <router-link v-if="!user" class="link" to="#"
              ><i class="fa-solid fa-right-to-bracket fa-lg q-px-sm"></i>Login In /
              Register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 All Rights Reserved</p>
        <p>Created by: {{ author }}</p>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'MainFooter',
  setup() {
    const author = ref('Jerald Bianan');
    const store = useStore();

    const user = computed(() => {
      return store.state.user;
    });

    return {
      author,
      user,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 25px 25px;
  background-color: #000;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        font-family: 'Comfortaa', Courier, monospace;
        text-align: center;
        font-size: 35px;
        color: #fff;
        margin-bottom: 16px;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }

        .header-span {
          font-family: 'Comfortaa', Courier, monospace;
          font-size: 20px;
          font-weight: 600;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }

      .col-1 {
        flex-direction: column;

        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;
            transition: 0.5s ease;

            &:hover {
              transform: scale(1.2);
            }
            .svg-icon {
              width: 30px;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 12px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
            transition: 0.5s ease all;

            &:hover {
              transform: scale(1.1);
              color: #1eb8b8;
            }
          }
        }
      }
    }

    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
    }
  }
}
</style>
