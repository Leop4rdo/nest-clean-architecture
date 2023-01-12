import NoteRepository from "src/application/repositories/note-repository";
import Note from "src/domain/entities/Note";

export default class InMemoryNoteRepository implements NoteRepository {
    private _data : Note[];

    public get data() : Note[] { return this._data }

    public async create(note : Note) : Promise<void> {
        this._data.push(note);
    }
}
