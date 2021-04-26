<script lang="ts">
  export let width;
  export let height;
  export let itemSize;
</script>

<grid style={`grid-template-columns: repeat(${width}, ${itemSize}px);`}>
  {#each { length: width } as i, x}
    {#each { length: height } as j, y}
      <square style={`width:${itemSize}px; height: ${itemSize}px;`}>s</square>
    {/each}
  {/each}
</grid>

<style>
  grid {
    display: grid;
    border: 1px solid black;
  }
  square {
    display: flex;
  }
</style>
