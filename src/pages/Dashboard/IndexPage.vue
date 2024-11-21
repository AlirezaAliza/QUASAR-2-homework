<template>
  <q-layout class="overflow-auto window-height">
    <div class="q-pa-md q-md-xl row items-start justify-center q-gutter-sm">
      <q-card
      class="my-card"
      v-for="(posts, index) in posts"
      :key="index"
      >

      </q-card>
    </div>
  </q-layout>
</template>         

<script lang="ts" setup>

import { posts } from "/src/components/ts/IndexComponent.ts";

  const like = (id:number) =>{
    console.log(id);

  }

</script>

<!--  -->
