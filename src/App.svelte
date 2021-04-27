<script lang="ts">
  import Grid from "./components/Grid.svelte";

  let items1 = [
    { id: 1, name: "test 1" },
    { id: 2, name: "test 2" },
  ];
  let items2 = [
    { id: 3, name: "item 3" },
    { id: 4, name: "item 4" },
  ];
</script>

<main>
  <Grid items={items1} gridSize={[8, 12]} />
  <Grid items={items2} gridSize={[8, 12]} />
</main>

<style>
  main {
    display: flex;
  }
</style>
