<script lang="ts">
  import Grid from "./components/Grid.svelte";
</script>

<main>
  <Grid gridSize={[8, 10]} />
  <Grid gridSize={[8, 10]} />
</main>

<style>
  main {
    display: flex;
  }
</style>
