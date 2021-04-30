<script lang="ts">
  import { make2dArray } from "../util";
  import Grid2Slot from "./Grid2Slot.svelte";

  export let gridSize: number[];

  const flipDurationMs = 150;

  let gridFill: any[][] = make2dArray(gridSize[0], gridSize[1], undefined);
</script>

<div>
  <section
    style={`height: ${gridSize[1] * 64}px; grid-template-columns: repeat(${
      gridSize[0]
    }, 64px);`}
  />
  <grid style={`grid-template-columns: repeat(${gridSize[0]}, 64px);`}>
    {#each { length: gridSize[1] } as i, y}
      {#each { length: gridSize[0] } as i, x}
        <square
          style={gridFill[x][y]
            ? "background-color:rgba(255,150,150);"
            : "background-color:rgba(230,255,230);"}
        >
          <Grid2Slot />
        </square>
      {/each}
    {/each}
  </grid>
</div>

<style>
  section {
    border: 1px solid Yellow;
    display: grid;
    position: absolute;
  }

  grid {
    height: 600px;
    display: grid;
    margin-right: 5rem;
  }
  square {
    width: 64px;
    height: 64px;
    color: #c0c0c0;
    box-sizing: border-box;
    border: #c0c0c0 solid;
    border-width: 0 1px 1px 0;
  }
</style>
