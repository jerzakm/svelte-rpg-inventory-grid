<script lang="ts">
  import Grid from "./components/Grid.svelte";
</script>

<main>
  <div class="grid-container">
    <Grid width="12" height="16" itemSize="64" />
  </div>
</main>

<style>
  .grid-container {
    margin: 1rem;
    display: flex;
  }
</style>
