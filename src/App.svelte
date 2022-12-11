<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  // import Counter from './lib/Counter.svelte'

  import Inputs from './components/inputs.svelte'
  import RenderOcarina from './components/renderOcarina.svelte'

  let notes: string[] = [], style = ""
</script>

<main>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div> -->
  
  <h1>Ocarina Tab Maker</h1>

  {notes}

  <Inputs bind:notes bind:style />

  <RenderOcarina {notes} />

  <!-- <div class="card">
    <Counter />
  </div> -->

  <!-- <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p> -->
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>