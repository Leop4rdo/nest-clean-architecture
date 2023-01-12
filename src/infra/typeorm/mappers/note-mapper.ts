import Note from "@domain/entities/Note";
import { Injectable } from "@nestjs/common";
import { Timestamp } from "typeorm";
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
}
