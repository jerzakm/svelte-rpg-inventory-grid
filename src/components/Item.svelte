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
    // window.addEventListener("mouseup", (e) => {
    //   handleDragEnd(e);
    // });
    // window.addEventListener("mousemove", (e) => {
    //   const n = Math.random() * 100;
    //   handleDrag(e, n);
    // });
  }

  function handleDragEnd(e) {
    console.log(e);
    dragging = false;
  }

  function handleDrag(e) {
    mouseMove.x = e.pageX;
    mouseMove.y = e.pageY;
  }
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
  <img src="fenrir.jpg" alt="Item" draggable="false" />
</div>

<style>
  img {
    user-select: none;
  }
</style>
