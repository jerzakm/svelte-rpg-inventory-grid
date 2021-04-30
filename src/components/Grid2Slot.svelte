<script>
  import { uuidv4 } from "../util";
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";

  let items = [];

  const dropTargetStyle = { backgroundColor: "rgba(100, 255, 102, 0.25)" };

  // dummy fill
  if (Math.random() > 0.8) {
    items.push({
      id: uuidv4(),
      name: Math.round(Math.random() * 500),
      size: [1, 1],
    });
  }

  let dropFromOthersDisabled = items.length > 0 ? true : false;

  const flipDurationMs = 200;
  function handleDndConsider(e) {
    items = e.detail.items;
  }
  function handleDndFinalize(e) {
    items = e.detail.items;
    dropFromOthersDisabled = items.length > 0 ? true : false;
  }
</script>

<section
  use:dndzone={{
    items,
    flipDurationMs,
    dropFromOthersDisabled,
    dropTargetStyle,
  }}
  on:consider={handleDndConsider}
  on:finalize={handleDndFinalize}
>
  {#each items as item (item.id)}
    <div
      animate:flip={{ duration: flipDurationMs }}
      style={`width: ${64 * item.size[0]}px; height: ${
        64 * item.size[1]
      }px; background-color: rgba(${Math.round(
        Math.random() * 150 + 104
      )},${Math.round(Math.random() * 200 + 54)},${Math.round(
        Math.random() * 200 + 54
      )},1.0)`}
    >
      {item.name}
    </div>
  {/each}
</section>

<style>
  section {
    position: absolute;
    width: 64px;
    height: 64px;
  }
</style>
