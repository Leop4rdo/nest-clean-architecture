import Note from "@domain/entities/Note";
import { Injectable } from "@nestjs/common";
import NoteModel from "../models/note-model";

@Injectable()
export default class NoteMapper {
    
    public toModel(note : Note) : NoteModel {
        const model = new NoteModel();

        model.id = note.id;
        model.title = note.title;
        model.content = note.content.value;
        model.createdAt = note.createdAt.toISOString();

        return model;
    }

    public toEntity(note : NoteModel) : Note {
        const entity = new Note({
            id : note.id,
            title : note.title,
            content : note.content,
            createdAt : new Date(note.createdAt)
        })

        return entity;
    } 

    public toModelList(notes : Note[]) : NoteModel[] {
        return notes.map(this.toModel);
    }

    public toEntityList(notes : NoteModel[]) : Note[] {
        return notes.map(this.toEntity)
    }
}
