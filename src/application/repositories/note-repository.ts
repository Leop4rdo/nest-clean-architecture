import Note from "@domain/entities/Note";

export default abstract class NoteRepository {
    abstract create(note : Note) : Promise<void>;
}
