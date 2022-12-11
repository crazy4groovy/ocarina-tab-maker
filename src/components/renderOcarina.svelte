<script lang="ts">
    export let notes: string[] = [];
    let groups: any[] = [];
    $: console.log("!", notes.join(""));
    $: groups = notes
        .join("")
        .split("\n")
        .map((l) => l.split(""));
    $: console.log("!@", groups);
</script>

{#each groups as groupNotes}
    <div class="notes">
        {#each groupNotes as note}
            <div class={`note-${note}`} alt={`note-${note}`} />
        {/each}
    </div>
{/each}
