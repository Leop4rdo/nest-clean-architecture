import InMemoryNoteRepository from "../../../infra/in-memory-database/InMemoryNoteRepository";
import CreateNoteUseCase from "./create-note-use-case";

describe('Create note use case tests', () => {
    it('Should create note', async () => {
        const repository = new InMemoryNoteRepository();
        const useCase = new CreateNoteUseCase(repository);

        const note = await useCase.handle({
            title : 'Nice Note :)',
            content : 'Hello World!'
        });

        expect(repository.data).toHaveLength(1);
        expect(repository.data[0]).toEqual(note);
    })
});
