<template>
  <div class="main">
    <q-page>
      <div class="container">
        <q-input class="inputs" label="Username">
          <template v-slot:append> </template></q-input>
        <q-input class="inputs" label="Email">
          <template v-slot:append> </template></q-input>
        <q-input class="inputs" label="Password" type="password"><template v-slot:append></template></q-input>
        <label style="font-size: 20px; margin-left: 80px">
          please enter your avatar
        </label>
        <q-file filled bottom-slots v-model="model" label="Label" counter>
          <template v-slot:prepend>
            <q-icon name="cloud_upload" @click.stop.prevent />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
          </template>
        </q-file>
        <q-btn class="btn_go" push color="primary" label="Make Account" /><br />
        <label class="text_login">You have an account and <button @click="login"> Login </button>
        </label>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const login = () => {
  router.replace({ name: 'loginPage' })
}

</script>
