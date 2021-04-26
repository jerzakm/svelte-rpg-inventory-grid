<script lang="ts">
  import { make2dArray } from "../util";
  import { dragStatus } from "../dragStatus";
  import {onMount} from 'svelte'

  import Item from "./Item.svelte";

  export let width;
  export let height;
  export let itemSize;

  let gridDomElement:HTMLElement;
  let gridFillStatus: boolean[][] = make2dArray(width, height, false);

  function checkItemFit(itemSize: number[], position: number[]) {
    let fits = false;

    return fits;
  }

  onMount(()=> {
dragStatus.store.subscribe((dragStatus) => {
    // first check if currently dragged item is within this grid's bounds
    const bounds = gridDomElement.getBoundingClientRect()
    console.log(bounds)
    // then check for gridfit
    checkItemFit(dragStatus.itemSize, [dragStatus.itemX, dragStatus.itemY])
  });
  })

</script>

<grid style={`grid-template-columns: repeat(${width}, ${itemSize}px);`} bind:this={gridDomElement}>
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
