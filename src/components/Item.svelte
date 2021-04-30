<script lang="ts">
  import { onMount } from "svelte";
  export let item;

  let domElement;

  function applyStyle(domElement: HTMLElement) {
    if (domElement) {
      domElement.style.width = `${64}px`;
      domElement.style.height = `${64}px`;
    }
  }

  $: applyStyle(domElement);
</script>

<item
  style={`left: ${item.position[0] * 64}px; top: ${
    item.position[1] * 64
  }px; background-color: ${item.bgColor};`}
  bind:this={domElement}
>
  {item.name}
</item>

<style>
  item {
    position: absolute;
    border-radius: 16px;
  }
</style>
