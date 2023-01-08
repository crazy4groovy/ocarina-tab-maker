<script lang="ts">
  import { push } from 'svelte-spa-router';

  import Inputs from "../components/inputs.svelte";
  import RenderOcarina from "../components/renderOcarina.svelte";

  export let params = { notes: "" };
  
  let notes = params?.notes?.replace(/\*/g, "\n").split("") || [];
  // let style = "";
  
  $: push(`#/${notes.join('').replace(/\n/g, "*")}`)
</script>

<Inputs bind:notes />
<RenderOcarina {notes} />
