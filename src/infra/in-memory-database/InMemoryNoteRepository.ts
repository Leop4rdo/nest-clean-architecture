import { NotImplementedException } from "@nestjs/common";
import NoteRepository from "src/application/repositories/note-repository";
import Note from "src/domain/entities/Note";

export default class InMemoryNoteRepository implements NoteRepository {
    private _data : Note[];

    constructor(data ?: Note[]) {
        this._data = data ?? [];
    }

    public get data() : Note[] { return this._data }
    
    public withData(data : Note[]) {
        this._data = data

        return this;
    }

    public async create(note : Note) : Promise<void> {
        this._data.push(note);
    }

    public async getById(): Promise<Note> {
        throw new NotImplementedException;
    }

    public async listAll(): Promise<Note[]> {
        return this._data;
    }

    public async delete(id: string): Promise<boolean> {
        throw new NotImplementedException;
    }

    public async update(note: Note, id: string): Promise<Note> {
        throw new NotImplementedException;
    }
}
