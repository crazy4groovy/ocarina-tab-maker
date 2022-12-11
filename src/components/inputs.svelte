<script lang="ts">
    export let notes: string[] = [];
    export let style = "4hole";

    function onSelect(e: any) {
        style = e.target.value;
        // console.log(style)
    }

    function onType(e: any) {
        notes = e.target.value.toLowerCase().split('');
        console.log(notes)
    }
</script>

<!-- <label for="style">
    Style:
    <select name="stlye" id="style" on:change={(e) => {}}>
        <option value="4hole">4 holes</option>
        <option value="12hole">12 holes</option>
    </select>
</label>
<br /> -->
<label for="quick-text">
    Quick text:
    <textarea name="quick-text" id="quick-text" rows="2" on:keyup={onType} value={notes.join('')} />
</label>
