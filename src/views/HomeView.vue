<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
import FileInput from '@/components/FileInput.vue';
import * as constants from '../lib/constants';

const isOpen = ref(false);
const extension = ref('');
</script>

<template>
  <main>
    <div class="text-3xl font-bold underline ">
      Hello world!
    </div>
    <button @click="isOpen = !isOpen">Open</button>
    <teleport to="body">
      <Modal v-if="isOpen" @close="isOpen = false">
        <template v-slot:content>
          <div class="flex flex-wrap">
            <FileInput :extension="extension" @content="(content)=>{ console.log(content)}" />    

            <select v-model="extension">
              <option disabled value="">Please select one</option>
              <option v-for="file_type in constants.FILE_TYPES">{{file_type}}</option>
            </select>
          </div>
        </template>
        <template v-slot:buttons>
          <button class="bg-blue-500 text-white">Save</button>
        </template>
      </Modal>
    </teleport>
  </main>
</template>
