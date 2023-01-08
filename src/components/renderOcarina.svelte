<script lang="ts">
    import { notesToClasses } from "../utils/notesToClasses";

    export let notes: string[] = [];
    let classGroups: any[] = [];

    let zoomLevel = 1;
    const r: any = document.querySelector(":root");
    r.style.setProperty("--zoomLevel", zoomLevel.toString());

    $: console.log("!notes", notes.join(""));

    $: classGroups = notes
        .join("")
        .split("\n")
        .map((l) => notesToClasses(l.split("")));

    $: console.log("!groups", classGroups);

    function ZoomIn() {
        zoomLevel += 0.1;
        zoomLevel = Math.min(1, zoomLevel);
        r.style.setProperty("--zoomLevel", zoomLevel.toString());
    }
    function ZoomOut() {
        zoomLevel -= 0.1;
        zoomLevel = Math.max(0.4, zoomLevel);
        r.style.setProperty("--zoomLevel", zoomLevel.toString());
    }
</script>

{#if notes.length > 0}
    <h1>Tab Music</h1>
{/if}

Zoom:
<button on:click={ZoomIn}>+</button>
<button on:click={ZoomOut}>-</button>
<br />
<br />

{#each classGroups as classes}
    <div class="notes zoom">
        {#each classes as klass}
            <div class={`note-${klass}`} title={`${klass}`} />
        {/each}
    </div>
{/each}

<style>
    .notes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-items: center;
        align-items: center;
        align-content: center;
        padding-bottom: 2rem;
    }

    .notes > div {
        width: 115px;
        height: 115px;
        /* transform: scale(var(--zoomLevel)); */
    }

    .zoom {
        transform: scale(var(--zoomLevel));
    }
</style>
