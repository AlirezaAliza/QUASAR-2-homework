<script setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps({
  modal: {
    default: false,
  },
});

const createPostParameter = ref({
  title: '',
  description: '',
  image: undefined,
});

const emit = defineEmits(['update:modal']);

const close = () => {
  emit.call(this, 'update:modal', false);
};

const accepted = () => {
  console.log(
    createPostParameter.value.title,
    createPostParameter.value.description,
    createPostParameter.value.image
  );
  emit.call(this, 'update:modal', false);
};
</script>

<template>
  <q-dialog :model-value="props.modal" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Create New Post</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model:model-value="createPostParameter.title"
          label="Enter Your Title"
        />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          type="textarea"
          dense
          v-model="createPostParameter.description"
          label="Enter Your Description"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-file
          filled
          bottom-slots
          v-model:model-value="createPostParameter.image"
          label="Post Image"
          counter
        >
          <template v-slot:prepend>
            <q-icon name="cloud_upload" @click.stop.prevent />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click.stop.prevent="createPostParameter.image = null"
              class="cursor-pointer"
            />
          </template>
        </q-file>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn color="red" label="Cancel" icon-right="close" @click="close()" />
        <q-btn
          color="light-blue-8"
          label="Update"
          icon-right="create"
          @click="accepted()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
