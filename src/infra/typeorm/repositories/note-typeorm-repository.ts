import NoteRepository from "@application/repositories/note-repository";
import Note from "@domain/entities/Note";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import NoteMapper from "../mappers/note-mapper";
import NoteModel from "../models/note-model";

@Injectable()
export default class NoteTypeOrmRepository implements NoteRepository {
    constructor(
        @InjectRepository(NoteModel)
        private readonly _repo : Repository<NoteModel>,

        private readonly _mapper : NoteMapper
    ){}

    create(note: Note): Promise<void> {
        this._repo.insert(this._mapper.toModel(note));

        return;
    }
}
