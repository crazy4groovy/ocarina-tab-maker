<script lang="ts">
    import Router from 'svelte-spa-router';
  
    import routes from './routes';
    import Layout from './Layout.svelte';
  </script>
  
  <!-- <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/water.css@2/out/light.css"
  /> -->
  
  <Layout>
    <Router {routes} />
  </Layout>
  
  <style></style>