<template>
  <div class="diamond-outer">
    <div class="diamond-inner">
      <div class="square-outer">
        <div class="square-inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.diamond-outer {
  width: 60px;
  height: 60px;
  border: 5px #b0232e solid;
  transform: rotate(45deg);
  padding: 0;
  margin: 20px;

  .diamond-inner {
    position: relative;
    top: 2px;
    left: 2px;
    width: 52px;
    height: 52px;
    border: 3px #b0232e solid;

    .square-outer {
      position: relative;
      transform: rotate(-45deg);
      top: -8px;
      left: -8px;
      width: 60px;
      height: 60px;
      background-color: #fffdee;
      border: 5px #b0232e solid;

      .square-inner {
        position: relative;
        top: 3px;
        left: 3px;
        width: 51px;
        height: 51px;
        background-color: #fffdee;
        border: 2px #b0232e solid;
      }
    }
  }
}
</style>
