<script lang="ts">
  export let item;

  console.log(item);
</script>

<item
  style={`left: ${item.position[0] * 64}px; top: ${item.position[1] * 64}px`}
>
  {item.name}
</item>

<style>
  item {
    position: absolute;
    width: 64px;
    height: 64px;
  }
</style>
