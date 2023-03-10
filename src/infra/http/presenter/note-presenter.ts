import Note from "@domain/entities/Note";

export default class NotePresenter {
    
    static toHttpResponse(note : Note) {
        return {
            id : note.id,
            title : note.title,
            content : note.content.value,
            created_at : note.createdAt.toISOString()
        }
    }

    static toHttpListResponse(notes : Note[]) {
        return {
            amount : notes.length,
            data : notes.map(this.toHttpResponse)
        }
    }
}
