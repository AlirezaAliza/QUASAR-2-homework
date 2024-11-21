<template>
  <div class="main">
    <q-page>
      <div class="container">
        <q-input class="inputs" label="Username">
          <template v-slot:append> </template
        ></q-input>
        <q-input class="inputs" label="Email">
          <template v-slot:append> </template
        ></q-input>
        <q-input class="inputs" label="Password" type="password"
          ><template v-slot:append></template
        ></q-input>
        <label style="font-size: 20px; margin-left: 80px">
          please enter your avatar
        </label>
        <div class="avatars">
          <button class="game_1" @click="logMessage('/public/images/12.png')">
            <q-avatar id="Avatar1"
              ><img src="/public/images/12.png"
            /></q-avatar>
          </button>
          <button class="game_2" @click="logMessage('/public/images/18.png')">
            <q-avatar id="Avatar2"
              ><img src="/public/images/18.png"
            /></q-avatar>
          </button>
          <button class="game_3" @click="logMessage('/public/images/40.png')">
            <q-avatar id="Avatar3"
              ><img src="/public/images/40.png"
            /></q-avatar>
          </button>
          <button class="game_4" @click="logMessage('/public/images/22.png')">
            <q-avatar id="Avatar4"
              ><img src="/public/images/22.png"
            /></q-avatar>
          </button>
        </div>
        <q-avatar class="avatar_s"><img id="game" src="" /></q-avatar>
        <q-btn class="btn_go" push color="primary" label="Make Account" /><br />
        <label class="text_login"
          >You have an account and
          <button><strong>LOGIN</strong></button></label
        >
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  methods: {
    logMessage(srrc) {
      document.getElementById('game').src = srrc;
    },
  },
};
</script>
