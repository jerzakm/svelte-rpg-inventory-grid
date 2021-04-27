<script lang="ts">
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  export let items: any[];
  export let gridSize: number[];
  const flipDurationMs = 300;
  function handleDndConsider(e) {
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
  >
    {#each items as item (item.id)}
      <item animate:flip={{ duration: flipDurationMs }}>
        {item.name}
      </item>
    {/each}
  </section>
  <grid>
    {#each { length: gridSize[0] } as i, x}
      {#each { length: gridSize[1] } as i, y}
        <square />
      {/each}
    {/each}
  </grid>
</div>

<style>
  section {
    height: 600px;
    border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(6, 64px);
    overflow-x: scroll;
  }
  item {
    width: 64px;
    height: 64px;
  }
  grid {
    display: grid;
    grid-template-columns: repeat(6, 64px);
    position: absolute;
  }
  square {
    width: 64px;
    height: 64px;
    border: black solid;
    border-width: 0 1px 1px 0;
  }
</style>
