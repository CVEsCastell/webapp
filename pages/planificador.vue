<template>
  <div class="Page Planificador flex h-[100vh]">
    <PlanificadorSidebar
      @download="handleDownload"
    />
    {{ isAspectRatioVertical }}
    <div
      ref="parent"
      class="Planificador__content overflow-auto p-2 flex-1 flex items-center justify-center"
    >
      <div
        ref="workspace"
        :class="[
          'Planificador__workspace bg-dark-workspace rounded',
          workspaceRatioClass,
        ]"
        style="background-image: url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/volleyball-schedule-poster-template-103acd329c61f2b9fdb1db1da1b36faa_screen.jpg?ts=1636969402)"
      />
    </div>
  </div>
</template>

<script setup>
import debounce from 'lodash/debounce';
import domToImage from 'dom-to-image';

const workspace = ref();
const parent = ref();
const workspaceRatioClass = ref('w-full');

onMounted(() => {
  setWorkspaceAspectRatioDirection();

  window.onresize = debounce(() => {
    setWorkspaceAspectRatioDirection();
  }, 10);
});

const setWorkspaceAspectRatioDirection = () => {
  const isVerticalScroll = parent.value.scrollHeight > parent.value.offsetHeight;
  const isHorizontalScroll = parent.value.scrollWidth > parent.value.offsetWidth;

  if (!isVerticalScroll && !isHorizontalScroll) {
    return;
  }

  workspaceRatioClass.value = isHorizontalScroll ? 'w-full' : 'h-full';
};

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
    &__workspace {
      aspect-ratio: 4 / 5;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 50%;
    }
}
</style>