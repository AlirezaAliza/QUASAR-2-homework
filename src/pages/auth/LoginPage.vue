<template>
  <q-page-container>
    <q-page class="window-height window-width row justify-center items-center">
      <div class="column">
        <div class="row">
          <h5 class="text-h5 text-white q-my-md div">Welcome To Open World</h5>
        </div>
        <div class="row">
          <q-card square bordered class="q-pa-lg w-400">
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input
                  v-model="loginParameters.username"
                  square
                  filled
                  clearable
                  type="email"
                  label="Email"
                  class="inputs"
                />
                <q-input
                  v-model="loginParameters.password"
                  square
                  filled
                  clearable
                  type="password"
                  label="Password"
                  class="inputs"
                />
              </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn
                @click="login()"
                unelevated
                color="light-blue-8"
                size="lg"
                class="full-width"
                id="border"
                label="login"
              />
              <q-btn
                @click="register()"
                unelevated
                color="red"
                size="lg"
                class="full-width q-ma-sm"
                id="border"
                label="Register"
              />
            </q-card-actions>
            <q-card-section class="text-center q-pa-none"> </q-card-section>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<style>
.div {
  position: relative;
  left: 60px;
}

#border {
  border-radius: 100px;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth-store';

const loginParameters = ref({
  username: '',
  password: '',
});

const login = () => {
  authStore
    .authenticate(
      loginParameters.value.username,
      loginParameters.value.password
    )
    .then(
      () => {
        router.replace({ name: 'index' });
      },
      (error) => {
        alert(`this name is not login please first register and then login`);
        console.log(error);
      }
    );
};

const router = useRouter();
const register = () => {
  router.replace({ name: 'register' });
};

const authStore = useAuthStore();
</script>
