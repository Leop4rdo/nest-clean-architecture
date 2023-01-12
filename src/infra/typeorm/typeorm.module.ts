import NoteRepository from "@application/repositories/note-repository";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import NoteMapper from "./mappers/note-mapper";
import NoteModel from "./models/note-model";
import NoteTypeOrmRepository from "./repositories/note-typeorm-repository";
import SQLiteDataSourceConfig from "./sqlite-data-source-config";

@Module({
    imports: [ 
        TypeOrmModule.forRoot(SQLiteDataSourceConfig),
        TypeOrmModule.forFeature([NoteModel])
    ],
    providers : [
        NoteMapper,
        {
            provide : NoteRepository,
            useClass: NoteTypeOrmRepository
        } 
    ],
    exports : [
        NoteRepository
    ]
})
export default class TypeOrmDatabaseModule {}
