import CreateNoteUseCase from "@application/use-cases/note/create-note-use-case";
import ListAllNotesUseCase from "@application/use-cases/note/list-all-notes-use-case";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import NotePresenter from "../presenter/note-presenter";
import NoteCreateRequestBody from "../request-body/note/note-create-request-body";

@Controller('api/v1/notes')
export default class NoteController {

    constructor(
        private readonly _createNoteUseCase : CreateNoteUseCase,
        private readonly _listAllNotesUseCase : ListAllNotesUseCase
    ) {}

    @Post()
    public async create(@Body() body : NoteCreateRequestBody) {
        const note = await this._createNoteUseCase.handle(body);

        return NotePresenter.toHttpResponse(note);
    } 

    @Get()
    public async list() {
        const notes = await this._listAllNotesUseCase.handle();

        return NotePresenter.toHttpListResponse(notes)
    }

    @Get(':id')
    public getById(@Param() params) {
        return 'Not Implemented Yet';
    }
}
