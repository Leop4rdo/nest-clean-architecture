import Note from "@domain/entities/Note"
import TestUtils from "@test/utils";
import { randomUUID } from "crypto"
import NoteModel from "../models/note-model"
import NoteMapper from "./note-mapper";

const entity = new Note({
    id : randomUUID(),
    title : 'Test Note!',
    content : 'This note is a test',
})

const model = new NoteModel();
model.content = entity.content.value;
model.title = entity.title;
model.id = entity.id;
model.createdAt = entity.createdAt.toISOString();

const mapper = new NoteMapper();

describe('Note mapper tests', () => {
    it('should map Note (entity) to NoteModel', () => {
        const mapped = mapper.toModel(entity);

        expect(mapped).toBeTruthy();
        expect(mapped).toEqual(model);
    })

    it('should map Note (entity) list to NoteModel list', () => {
        const amount = 5;

        const entityList = TestUtils.repeat(() => entity, amount);
        const mapped = mapper.toModelList(entityList);

        expect(mapped).toHaveLength(amount);
        expect(mapped[0]).toEqual(model);
    })
})
