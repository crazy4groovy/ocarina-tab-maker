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

<h2>{notes.join(",")}</h2>

{#each groups as notes}
    <div class="notes">
        {#each notes as note}
            <div class={`note-${note}`} alt={`note-${note}`} />
        {/each}
    </div>
{/each}
