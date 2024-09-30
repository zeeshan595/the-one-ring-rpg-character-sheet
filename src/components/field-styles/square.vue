<template>
  <div class="circle-outer">
    <div class="circle-inner">
      <div class="content"><slot></slot></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.circle-outer {
  width: 60px;
  height: 60px;
  border: 5px #968B80 solid;
  padding: 0;
  margin: 20px;

  .circle-inner {
    position: relative;
    top: 1.6px;
    left: 1.3px;
    width: 52px;
    height: 52px;
    border: 3px #968B80 solid;

    .content {
      position: relative;
      top: 5px;
    }
  }
}
</style>
