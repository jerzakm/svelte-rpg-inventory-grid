<script lang="ts">
  import { dndzone } from "svelte-dnd-action";
  import { uuidv4, make2dArray } from "../util";
  import Item from "./Item.svelte";

  export let items: any[] = [];
  export let gridSize: number[];

  // fillgrid

  for (let i = 0; i < 9; i++) {
    items.push({
      id: uuidv4(),
      name: Math.round(Math.random() * Math.random() * 1000),
      position: [Math.round(Math.random() * (gridSize[0] - 1)), i],
      bgColor: `rgba(${Math.round(Math.random() * 150 + 104)},${Math.round(
        Math.random() * 200 + 54
      )},${Math.round(Math.random() * 200 + 54)},1.0)`,
      itemSize: [1, 1],
    });
  }
  const flipDurationMs = 150;

  let gridFill: any[][] = make2dArray(gridSize[0], gridSize[1], undefined);

  calcGridFill();

  function calcGridFill() {
    gridFill = make2dArray(gridSize[0], gridSize[1], undefined);
    for (const item of items) {
      for (let x = 0; x < item.itemSize[0]; x++) {
        for (let y = 0; y < item.itemSize[0]; y++) {
          gridFill[x + item.position[0]][y + item.position[1]] = item;
        }
      }
    }
  }

  function handleDndConsider(e) {
    console.log("consider?");
    items = e.detail.items;
  }
  function handleDndFinalize(e) {
    items = e.detail.items;
  }
</script>

<div>
  <section
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
    style={`height: ${gridSize[1] * 64}px; grid-template-columns: repeat(${
      gridSize[0]
    }, 64px);`}
  >
    {#each items as item (item.id)}
      <Item {item} />
    {/each}
  </section>
  <grid style={`grid-template-columns: repeat(${gridSize[0]}, 64px);`}>
    {#each { length: gridSize[1] } as i, y}
      {#each { length: gridSize[0] } as i, x}
        <square
          style={gridFill[x][y]
            ? "background-color:rgba(255,150,150);"
            : "background-color:rgba(230,255,230);"}>{x}:{y}</square
        >
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
