<script lang="ts">
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import { uuidv4 } from "../util";
  import Item from "./Item.svelte";

  export let items: any[] = [];

  // fillgrid
  for (let i = 0; i < 5; i++) {
    items.push({
      id: uuidv4(),
      name: Math.round(Math.random() * Math.random() * 1000),
      position: [0, i],
    });
  }

  export let gridSize: number[];
  const flipDurationMs = 300;
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
      <item
        style={`left: ${item.position[0] * 64}px; top: ${
          item.position[1] * 64
        }px`}
      >
        {item.name}
      </item>
      <!-- <Item {item} /> -->
    {/each}
  </section>
  <grid style={`grid-template-columns: repeat(${gridSize[0]}, 64px);`}>
    {#each { length: gridSize[0] } as i, x}
      {#each { length: gridSize[1] } as i, y}
        <square>{x}:{y}</square>
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

  item {
    position: absolute;
    width: 64px;
    height: 64px;
  }
</style>
