import CreateNoteUseCase from "@application/use-cases/note/create-note-use-case";
import TypeOrmDatabaseModule from "@infra/typeorm/typeorm.module";
import { Module } from "@nestjs/common";
import NoteController from "./controllers/note.controller";

@Module({
    imports: [ TypeOrmDatabaseModule ],
    controllers: [NoteController],
    providers : [
        CreateNoteUseCase
    ]
})
export default class HttpModule {}
