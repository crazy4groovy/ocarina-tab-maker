export function notesToClasses(notes: string[]): string[] {
    return notes.reduce((classes: string[], note, i) => {
        const isLowerCase = note.toLowerCase() === note
        const isSharp = notes[i + 1] === "#"

        const klass = `${note.toLowerCase()}${isSharp ? 'sharp' : ''}${isLowerCase ? 'dot' : ''}`

        if (isSharp) notes.splice(i + 1, 1);

        classes.push(klass)
        return classes
    }, [] as string[])
}