<template>
  <q-layout view="hHh lpR fFf" style="background-image: url(/public/images/loginWallpaper.jpg);">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/public/images/logo.png">
          </q-avatar>
          menu
        </q-toolbar-title>
        <span>profile</span>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-list separator>
        <q-item v-for="(item, index) in accessMenu" :key="index" :to="{ name: item.route }" v-ripple clickable>
          <q-avatar><q-icon :name="item.icon"></q-icon></q-avatar>
          <q-item-section><q-item-label class="q-ml-md">{{ item.name }}</q-item-label></q-item-section>

        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <div class="avatarBox row items-center justify-center">
        <q-avatar size="150px" class="overLapping">
          <img :src="profileTemp.avatar" />
        </q-avatar>
      </div>
      <!-- <div class="q-pa-md row items-center q-gutter-md justify-center">
        <q-card flat bordered class="text-center">
          <q-card-section>
            <div class="text-h3">Profile</div>
          </q-card-section>
          <q-separator inset/>
          <q-card-section class="q-pt-none">
            <div class="text-h3">Username</div>
            {{profileTemp.username}}
          </q-card-section>
          <q-separator inset/>
          <q-card-section class="q-pt-none">
            <div class="text-h3">Email</div>
            {{profileTemp.email}}
          </q-card-section>
          <q-separator inset/>
        </q-card>
      </div> -->
      <div class="q-pa-md row items-center q-gutter-md justify-center">
        <q-card flat bordered class="my-card text-center">
          <q-card-section>
            <div class="text-h3">Profile</div>
          </q-card-section>
          <q-separator inset />

          <q-card-section class="q-pt-none">
            <div class="text-h6">User Name</div>
            {{ profileTemp.username }}
          </q-card-section>

          <q-separator inset />

          <q-card-section class="q-pt-none">
            <div class="text-h6">E-Mail</div>
            {{ profileTemp.email }}
          </q-card-section>
        </q-card>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { accessMenu } from 'components/ts/menuComponent';
import { profileTemp } from 'components/ts/ProfileComponent';

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      accessMenu,
      profileTemp,
    }
  }
}
</script>
