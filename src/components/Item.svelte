<script lang="ts">
  let dragStart = {
    x: 0,
    y: 0,
  };

  let mouseMove = {
    x: 0,
    y: 0,
  };

  let dragging = false;

  function handleDragStart(e) {
    console.log(e);
    dragging = true;
    dragStart.x = e.pageX;
    dragStart.y = e.pageY;
    console.log(dragStart.x, e.pageX);
  }

  function handleDragEnd(e) {
    console.log(e);
    dragging = false;
  }

  function handleDrag(e) {
    mouseMove.x = e.pageX;
    mouseMove.y = e.pageY;
  }

  export let itemSize = [10, 10];
  export let squareSize = 64;
</script>

<div
  on:mousedown={handleDragStart}
  on:mouseup={handleDragEnd}
  on:mousemove={handleDrag}
  draggable="false"
  style={dragging
    ? `transform: translate3d(${mouseMove.x - dragStart.x}px, ${
        mouseMove.y - dragStart.y
      }px, 0);`
    : ""}
>
  <!-- <img src="fenrir.jpg" alt="Item" draggable="false" /> -->
  <svg
    width={`${itemSize[0] * squareSize}`}
    height={`${itemSize[1] * squareSize}`}
  >
    <image xlink:href="fenrir.jpg" width="100%" height="100%" x="0" y="0" />
    <rect width="100%" height="100%" style="fill:rgba(0,0,255,0.0);" />
  </svg>
  <cover />
</div>

<style>
  svg {
    user-select: none;
    position: absolute;
  }
</style>
