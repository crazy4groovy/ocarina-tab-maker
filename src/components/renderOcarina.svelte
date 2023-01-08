<script lang="ts">
    import { notesToClasses } from "../utils/notesToClasses";

    export let notes: string[] = [];
    let classGroups: any[] = [];

    $: console.log("!notes", notes.join(""));

    $: classGroups = notes
        .join("")
        .split("\n")
        .map((l) => notesToClasses(l.split("")));

    $: console.log("!groups", classGroups);
</script>

{#if notes.length > 0}
    <h1>Tab Music</h1>
{/if}

{#each classGroups as classes}
    <div class="notes">
        {#each classes as klass}
            <div class={`note-${klass}`} title={`${klass}`} />
        {/each}
    </div>
{/each}
