<script lang="ts">
    export let notes: string[] = [];
    let display = notes.join("");
    // export let style = "4hole";

    // function onSelect(e: any) {
    //     style = e.target.value;
    //     // console.log(style)
    // }

    function onType(e: any) {
        notes = e.target.value.replace(/[^a-g\s\n\#]/gi, "").split("");
        display = notes.join("");
        // console.log('$$!!', notes, display);
    }
</script>

<div class="no-print">
    <!--
    <label for="style">
        Style:
        <select name="stlye" id="style" on:change={(e) => {}}>
            <option value="4hole">4 holes</option>
            <option value="12hole">12 holes</option>
        </select>
    </label>
    <br />
    -->

    <label for="quick-text">
        Quick notes:
        <textarea
            name="quick-text"
            id="quick-text"
            rows="4"
            on:keyup={onType}
            value={display}
            placeholder="edcd eee ddd eGG"
        />
    </label>

    <div class="note">Notes:</div>
    <div class="note">Spaces, new lines, and <code>#</code> (no flats) are allowed.</div>
    <div class="note">
        For the lower-octive, only lowercase notes <code>c, d, e</code> are acceptable; all other notes
        can only be entered in UPPERCASE (<code>A, B, F, G</code>).
    </div>

    <br />
</div>

<style>
    div.note {
        font-style: italic;
        margin: 1rem;
    }
    textarea {
        max-width: 100%;
    }
</style>