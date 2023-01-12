import NoteRepository from "@application/repositories/note-repository";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import NoteTypeOrmRepository from "./repositories/note-typeorm-repository";
import SQLiteDataSourceConfig from "./sqlite-data-source-config";

Module({
    imports: [TypeOrmModule.forRoot(SQLiteDataSourceConfig)],
    providers : [
        {
            provide : NoteRepository,
            useClass : NoteTypeOrmRepository
        } 
    ],
    exports : [
        NoteRepository
    ]
})
export default class TypeOrmDatabaseModule {}
