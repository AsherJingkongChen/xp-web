<script lang="ts">
  import { PUBLIC_TITLE_PREFIX } from '$env/static/public';
  export let title: string;
  export let description: string;
</script>

<svelte:head>
  <title>{PUBLIC_TITLE_PREFIX}{title}</title>
  <meta
    name="description"
    content={description} />
</svelte:head>
