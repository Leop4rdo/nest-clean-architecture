import { Injectable } from "@nestjs/common";
import NoteRepository from "src/application/repositories/note-repository";
import Note from "src/domain/entities/Note";

type NoteCreateInput = {
    title : string
    content : string
}

@Injectable()
export default class CreateNoteUseCase {
    constructor(
        private readonly _noteRepository : NoteRepository
    ) {}

    public async handle(input : NoteCreateInput) : Promise<Note> {
        const note = new Note(input);

        await this._noteRepository.create(note);
        
        return note;
    }
}
