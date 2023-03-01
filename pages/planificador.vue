<template>
  <div
    ref="parent"
    class="Planificador"
  >
    <div
      ref="viewer"
      class="Planificador__viewer max-w-[1080px] max-h-[1350px] bg-gradient-to-br from-cyan-500 to-blue-500"
    >
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/volleyball-schedule-poster-template-103acd329c61f2b9fdb1db1da1b36faa_screen.jpg?ts=1636969402"
      />
      <p>TEST</p>
    </div>
    <button @click="handleDownload">
      Download
    </button>
  </div>
</template>

<script setup>
import domToImage from 'dom-to-image';

const viewer = ref();
const parent = ref();

const handleDownload = async () => {
  const dataUrl = await domToImage.toPng(viewer.value);
  const img = new Image();
  img.src = dataUrl;
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'partidosVoleibol.png';
  link.class = 'hidden';
  link.click();
  link.remove();
};
</script>

<style lang="scss">
.Planificador {
    &__viewer {
      width: 500px;
      aspect-ratio: 4 / 5;
    }
}
</style>