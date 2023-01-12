import NoteRepository from "@application/repositories/note-repository";
import Note from "@domain/entities/Note";
import { Injectable, NotImplementedException } from "@nestjs/common";
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

    async create(note: Note): Promise<void> {
        await this._repo.insert(this._mapper.toModel(note));

        return;
    }

    async listAll(): Promise<Note[]> {
        const data = await this._repo.find();

        return this._mapper.toEntityList(data);
    }

    getById(): Promise<Note> {
        throw new NotImplementedException;
    }

    update(note: Note, id: string): Promise<Note> {
        throw new NotImplementedException;
    }

    delete(id: string): Promise<boolean> {
        throw new NotImplementedException;
    }
}
