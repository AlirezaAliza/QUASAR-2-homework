<template>
  <q-page class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card
      v-for="post in posts"
      :key="post"
      class="card-sp text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">{{ post.title}}</div>
        <div class="text-subtitle2">{{ post.text }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ post.author }}
      </q-card-section>
    </q-card>

  </q-page>
</template>

<script setup>
import { posts } from 'src/components/ts/IndexPost';
</script>

<!--  -->
