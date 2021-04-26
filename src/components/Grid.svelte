<script lang="ts">
  import Item from "./Item.svelte";

  export let width;
  export let height;
  export let itemSize;
</script>

<grid style={`grid-template-columns: repeat(${width}, ${itemSize}px);`}>
  {#each { length: width } as i, x}
    {#each { length: height } as j, y}
      <square style={`width:${itemSize}px; height: ${itemSize}px;`}>0</square>
    {/each}
  {/each}
</grid>

<Item />

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
