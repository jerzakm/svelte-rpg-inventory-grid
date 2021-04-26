<script lang="ts">
  import Grid from "./components/Grid.svelte";
  import Item from "./components/Item.svelte";
</script>

<main>
  <div class="grid-container">
    <Grid width="12" height="16" itemSize="64" />
  </div>
  <Item />
</main>

<style>
  .grid-container {
    margin: 1rem;
    display: flex;
  }
  main {
    display: flex;
  }
</style>
