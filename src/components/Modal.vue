<template>
    <div class="bg-opacity-50 bg-black absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div class="bg-white w-1/2 h-1/2 rounded-lg flex flex-col">
            <button @click="onClose" class="flex justify-end"><XCircleIcon class="h-5 w-5 text-blue-500"/></button>
            <slot name="content"></slot>
            <slot name="buttons"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * When call this class need to define @close and @save emit catchers in parent
 */
import { XCircleIcon } from '@heroicons/vue/24/solid';

const emit = defineEmits<{
  (e: 'save'): void
  (e: 'close'): void
}>()

const onClose = ()=>{
    emit('close');
}
</script>