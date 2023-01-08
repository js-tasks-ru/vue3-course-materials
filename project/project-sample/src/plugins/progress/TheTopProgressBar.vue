<template>
  <div class="progress" :class="{ show, failed }" :style="{ width: currentProgress + '%' }"></div>
</template>

<script>
import { computed, ref } from 'vue';
import { useGsap } from './useGsap.js';

const START_DELAY = 0.2;
const MAX_PROGRESS = 95;
const MAX_DURATION = 30;
const FINISH_DURATION = 0.5;

export default {
  name: 'TheTopProgressBar',

  expose: ['start', 'finish', 'fail'],

  setup() {
    const currentProgress = ref(0);
    const failed = ref(false);
    const show = computed(() => currentProgress.value > 0);

    const progressTween = useGsap(currentProgress, { duration: MAX_DURATION, delay: START_DELAY, ease: 'expo.out' });
    const finishTween = useGsap(currentProgress, { duration: FINISH_DURATION });

    let loaders = new Set();

    const reset = () => {
      failed.value = false;
      currentProgress.value = 0;
    };

    const start = (loader) => {
      if (loaders.size === 0) {
        progressTween.start({ to: MAX_PROGRESS });
      }
      loaders.add(loader);
    };

    const finish = (loader) => {
      if (loaders.size === 0) {
        return;
      }
      if (loader !== undefined) {
        loaders.delete(loader);
      } else {
        loaders.clear();
      }
      if (loaders.size === 0) {
        progressTween.getTween().kill();
        if (show.value) {
          progressTween.getTween().kill();
          finishTween.start({ to: 100 }).then(reset);
        }
      }
    };

    const fail = () => {
      failed.value = true;
      finish();
    };

    return {
      currentProgress,
      failed,
      show,
      start,
      finish,
      fail,
    };
  },
};
</script>

<style scoped>
/* _progress.css */
.progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  width: 0;
  opacity: 0;
  background-color: var(--blue);
  transition: opacity 0.2s linear 0.2s;
  z-index: 999999;
}

.progress.show {
  opacity: 1;
  transition: none;
}

.progress.failed {
  background-color: #db3851;
}
</style>
