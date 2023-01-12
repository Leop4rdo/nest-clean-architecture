import Note from "./Note"

describe('Note Entity Tests', () => {
    it('Should not create note with content larger than 255 characters', () => {
        expect(() => new Note({
            title : 'test note',
            content : 'a'.repeat(300)
        })).toThrow('Content too large error');
    });

    it('Should create note', () => {
        const note = new Note({
            title : 'Test note',
            content : 'this note should be created!'
        })

        expect(note).toBeTruthy();
    })
})
