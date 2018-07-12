<script>
export default {
  name: 'progress-bar'
}
</script>

<template>
  <div id="progress-bar"></div>
</template>

<style lang="scss">
  #progress-bar {
    position: absolute;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;

    width: 100%;
    height: 4px;

    background: linear-gradient(124deg, #009586, #1a2420, #009586, #2c3e50, #009586, #1a2420, #009586, #2c3e50);
    background-size: 900% 900%;

    animation: progress 9s ease infinite;
  }

  @keyframes progress {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 200%; }
    100% {background-position: 0% 100%; }
  }
</style>
