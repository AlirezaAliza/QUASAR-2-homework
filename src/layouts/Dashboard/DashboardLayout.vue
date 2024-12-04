<template>
  <q-layout view="hHh lpR fFf" style="background-image: url(/public/images/loginWallpaper.jpg)">
    <q-header elevated class="gama text-white">
      <q-toolbar>
        <q-btn class="big" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar class="logo">
            <img src="images/Alireza (1).gif" />
          </q-avatar>
        </q-toolbar-title>
        <span class="big">profile</span>

        <q-btn class="big" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-list separator>
        <q-item v-for="(item, index) in accessMenu" :key="index" :to="{ name: item.route }" v-ripple clickable>
          <q-avatar><q-icon :name="item.icon"></q-icon></q-avatar>
          <q-item-section><q-item-label class="q-ml-md">{{
            item.name
              }}</q-item-label></q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <div class="avatarBox row items-center justify-center">
        <q-avatar size="150px" class="overLapping">
          <img :src="profileTemp.avatar" />
        </q-avatar>
      </div>
      <div class="q-pa-md row items-center q-gutter-md justify-center">
        <q-card flat bordered class="text-center">
          <q-card-section>
            <div class="text-h3">Profile</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section class="q-pt-none">
            <div class="text-h6">Username</div>
            {{ profileTemp.username }}
          </q-card-section>
          <q-separator inset />
          <q-card-section class="q-pt-none">
            <div class="text-h6">Email</div>
            {{ profileTemp.email }}
          </q-card-section>
          <q-separator inset />
        </q-card>
      </div>
      <div class="q-pa-md q-gutter-sm text-center">
        <q-btn class="full-width" label="Update" color="light-blue-8" @click="profileTemp.model = true" />
        <q-btn class="full-width" label="Logout" color="red" @click="Logout()" />
        <q-dialog v-model="profileTemp.model" persistent>
          <q-card style="min-width: 350px">
            <q-card-section>
              <div class="text-h6">Update Profile</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input dense v-model="profileTemp.username" label="Your Username" />
            </q-card-section>
            <q-card-section class="q-pt-none">
              <q-input dense v-model="profileTemp.email" label="Your Email" />
            </q-card-section>
            <q-card-section class="q-pt-none">
              <q-input dense v-model="profileTemp.password" label="Your Password" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-file filled bottom-slots v-model="profileTemp.newAvatar" label="Avatar" counter>
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop.prevent />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click.stop.prevent="profileTemp.newAvatar = null" class="cursor-pointer" />
                </template>
              </q-file>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn flat label="Update" v-close-popup @click="update()" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { accessMenu } from 'components/ts/MenuComponent';
import { profileTemp } from 'components/ts/ProfileComponent';

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      accessMenu,
      profileTemp,
      update() {
        console.log('update');
      },
      Logout() {
        console.log('logout');
      },
    };
  },
};
</script>
