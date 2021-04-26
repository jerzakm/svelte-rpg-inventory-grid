<script lang="ts">
  import { get } from "svelte/store";
  import { dragStatus } from "../dragStatus";

  export let itemSize = [6, 6];
  export let squareSize = 64;
  export let itemImage = "fenrir.jpg";

  let dragStart = {
    x: 0,
    y: 0,
  };

  let mouseMove = {
    x: 0,
    y: 0,
  };

  let dragging = false;
  let coverStyle = "fill:rgba(0,0,255,0.0);";
  let imageTransform = "";

  function handleDragStart(e) {
    console.log("drag start");
    dragging = true;
    dragStart.x = e.pageX;
    dragStart.y = e.pageY;
  }

  function handleDragEnd(e) {
    dragging = false;
    coverStyle = "fill:rgba(0,0,255,0.0);";
    imageTransform = "transform: translate3d(0px,0px,0px);";
    dragStatus.reset();
    console.log("drag end");
  }

  function handleDrag(e) {
    mouseMove.x = e.pageX;
    mouseMove.y = e.pageY;
    if (dragging) {
      coverStyle = "fill:rgba(255,255,0,0.05);";
      imageTransform = `transform: translate3d(${
        mouseMove.x - dragStart.x
      }px, ${mouseMove.y - dragStart.y}px, 0);`;

      const currentDragStatus = get(dragStatus.store);

      // RED cover- DOESNT FIT THE GRID
      if (!currentDragStatus.fits && currentDragStatus.onGrid) {
        coverStyle = "fill:rgba(255,0,0,0.15);";
      }
      // GREEN cover - FITS THE GRID
      else if (currentDragStatus.fits && currentDragStatus.onGrid) {
        coverStyle = "fill:rgba(0,255,0,0.15);";
      }

      console.log(currentDragStatus.fits, currentDragStatus.onGrid);

      dragStatus.store.set({
        itemX: mouseMove.x,
        itemY: mouseMove.y,
        dragging: true,
        itemImage: itemImage,
        itemSize,
        fits: currentDragStatus.fits,
        onGrid: currentDragStatus.onGrid,
      });
    }
  }
</script>

<div
  on:mousedown={handleDragStart}
  on:mouseup={handleDragEnd}
  on:mousemove={handleDrag}
  draggable="false"
  style={imageTransform}
>
  <svg
    width={`${itemSize[0] * squareSize}`}
    height={`${itemSize[1] * squareSize}`}
  >
    <image xlink:href={itemImage} width="100%" height="100%" x="0" y="0" />
    <rect width="100%" height="100%" style={coverStyle} />
  </svg>
</div>

<style>
  svg {
    user-select: none;
  }
</style>
