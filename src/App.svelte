<script lang="ts">
  import Grid from './components/Grid.svelte'
  import Grid2 from './components/Grid2.svelte'
</script>

<main>
  <!-- <Grid gridSize={[8, 10]} /> -->
  <!-- <Grid gridSize={[8, 10]} /> -->
  <Grid2 gridSize={[6, 10]} />
  <Grid2 gridSize={[6, 10]} />
</main>

<style>
  main {
    display: flex;
  }
  :global(body) {
    background-color: rgb(167, 167, 167);
  }
</style>
