<script lang="ts">
  import { make2dArray } from "../util";
  import { dragStatus } from "../dragStatus";
  import { onMount } from "svelte";

  import Item from "./Item.svelte";

  export let width;
  export let height;
  export let itemSize;

  let gridDomElement: HTMLElement;
  let gridFillStatus: boolean[][] = make2dArray(width, height, false);

  function checkItemFit(itemSize: number[], position: number[]): boolean {
    let fits = true;

    if (
      itemSize[0] + position[0] >= width ||
      itemSize[1] + position[1] >= height
    ) {
      fits = false;
    }

    return fits;
  }

  onMount(() => {
    dragStatus.store.subscribe((currentDragStatus) => {
      // first check if currently dragged item is within this grid's bounds
      const bounds = gridDomElement.getBoundingClientRect();
      // then check for gridfit
      const gridX = Math.floor(
        (currentDragStatus.itemX - bounds.left) / itemSize
      );
      const gridY = Math.floor(
        (currentDragStatus.itemY - bounds.top) / itemSize
      );
      console.log(gridX, gridY);
      const fits = checkItemFit(currentDragStatus.itemSize, [gridX, gridY]);
      if (fits != currentDragStatus.fits) {
        currentDragStatus.fits = fits;
        dragStatus.store.set(currentDragStatus);
      }
    });
  });
</script>

<grid
  style={`grid-template-columns: repeat(${width}, ${itemSize}px);`}
  bind:this={gridDomElement}
>
  {#each { length: width } as i, x}
    {#each { length: height } as j, y}
      <square style={`width:${itemSize}px; height: ${itemSize}px;`} />
    {/each}
  {/each}
</grid>

<style>
  grid {
    display: grid;
    border: 1px solid #dededede;
  }
  square {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dddddd;
    border-bottom: 1px solid #dededede;
    border-right: 1px solid #dededede;
  }
</style>
