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
        <q-item
        v-for="(item, index) in accessMenu"
        :key="index"
        :to="item.route"
        v-ripple
        clickable
        >
        <q-avatar><q-icon :name="item.icon"></q-icon></q-avatar>
        <q-item-section><q-item-label class="q-ml-md">{{ item.name}}</q-item-label></q-item-section>

        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { accessMenu } from 'components/ts/menuComponent';

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      accessMenu,
    }
  }
}
</script>
