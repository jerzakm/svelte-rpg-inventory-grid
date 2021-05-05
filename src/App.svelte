<script lang="ts">
  import Grid from "./components/Grid.svelte";
  import Grid2 from "./components/Grid2.svelte";
  import { Inventory } from "./Inventory";

  const invL = new Inventory({ x: 6, y: 10 });
  invL.addRandomItems(4);
  const invR = new Inventory({ x: 6, y: 10 });
  invR.addRandomItems(4);

  console.log(invL, invR);
</script>

<main>
  <!-- <Grid gridSize={[8, 10]} /> -->
  <!-- <Grid gridSize={[8, 10]} /> -->
  <Grid2 gridSize={[6, 10]} inventory={invL} />
  <Grid2 gridSize={[6, 10]} inventory={invR} />
</main>

<style>
  main {
    display: flex;
  }
  :global(body) {
    background-color: rgb(167, 167, 167);
  }
</style>
