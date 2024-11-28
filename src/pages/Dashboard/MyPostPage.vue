<template>
  <div class="q-pa-md q-md-lg overflow-auto window-height">
    <q-table
      :grid="$q.screen.xs"
      title="My Post"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      :rows-per-page-options="[pagination.rowsPerPage]"
      v-model:pagination="pagination"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
        label="Create New Post"
        color="light-blue-8"
        class="q-ml-md"
        />
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width>Tools</q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-th>
          <q-td auto-width>
            <q-btn
            class="q-ma-sm"
            color="warning"
            size="md"
            dense
            icon="update"
            />
            <q-btn
            class="q-ma-sm"
            color="red"
            size="md"
            dense
            icon="delete"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import { columns, rows, pagination } from 'components/ts/MyPostComponent'

const filter =  ref('')

</script>

<!--  -->
