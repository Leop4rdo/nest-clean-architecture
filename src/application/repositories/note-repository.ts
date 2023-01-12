import Note from "@domain/entities/Note";

export default abstract class NoteRepository {
    abstract create(note : Note) : Promise<void>;
    abstract listAll() : Promise<Note[]>;
    abstract getById() : Promise<Note | null>;
    abstract update(note : Note, id : string) : Promise<Note>;
    abstract delete(id : string) : Promise<boolean>;
}
