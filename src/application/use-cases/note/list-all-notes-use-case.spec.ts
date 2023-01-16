import Note from "@domain/entities/Note";
import InMemoryNoteRepository from "@infra/in-memory-database/InMemoryNoteRepository"
import TestUtils from "@test/utils";
import ListAllNotesUseCase from "./list-all-notes-use-case";

describe('List all notes use case tests', () => {
    it('should list all notes', async () => {
        const repo = new InMemoryNoteRepository()
            .withData(TestUtils.repeat(
                (index : number) => new Note({
                    title  : `Note #${index}`,
                    content : 'This note was created to test list-all-notes-use-case'
                }),
                10
            ));

        const useCase = new ListAllNotesUseCase(repo);

        const result = await useCase.handle();

        expect(result).toHaveLength(10);
    })
})
