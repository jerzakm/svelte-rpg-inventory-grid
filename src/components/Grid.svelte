<script lang="ts">
  import { make2dArray } from "../util";

  import Item from "./Item.svelte";

  export let width;
  export let height;
  export let itemSize;

  let gridFillStatus: boolean[][] = make2dArray(width, height, false);
  console.log(gridFillStatus);
</script>

<grid style={`grid-template-columns: repeat(${width}, ${itemSize}px);`}>
  {#each { length: width } as i, x}
    {#each { length: height } as j, y}
      <square style={`width:${itemSize}px; height: ${itemSize}px;`}>0</square>
    {/each}
  {/each}
</grid>

<style>
  grid {
    display: grid;
    background-color: #dededede;
    gap: 2px;
    padding: 2px;
  }
  square {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dddddd;
    background-color: #fff;
  }
</style>
