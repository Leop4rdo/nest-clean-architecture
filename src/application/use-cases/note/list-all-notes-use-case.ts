import NoteRepository from "@application/repositories/note-repository";
import Note from "@domain/entities/Note";
import { Injectable } from "@nestjs/common";


@Injectable()
export default class ListAllNotesUseCase {
    constructor(
        private readonly _noteRepository : NoteRepository
    ) {}

    public async handle() : Promise<Note[]> {
        const notes = await this._noteRepository.listAll();

        return notes;
    }
}
