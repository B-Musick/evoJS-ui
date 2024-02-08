<template>
    <div>
        <input ref="file" v-on:change="handleFileUpload()" type="file" :accept="extension">
        <div>{{ content }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Fasta } from '../lib/types';
import multiFastaParser from '../lib/helpers';

const props = defineProps(['extension']);

const emit = defineEmits<{
  (e: 'content', content: string): void
}>()

const file = ref();
const content = ref('');
const fastas = ref<Fasta[]>();

const handleFileUpload = async () => {
    const reader = new FileReader();

    if (file.value.files[0].name.includes(".fasta")) {
        reader.onload = (res) => {
          content.value = res.target.result;
          emit('content', content.value);
        //   fastas.value = multiFastaParser(content.value);
        };
        reader.onerror = (err) => console.log(err);
        reader.readAsText(file.value.files[0]);
    }
}
</script>