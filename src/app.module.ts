import HttpModule from "@infra/http/http.module";
import NoteTypeOrmRepository from "@infra/typeorm/repositories/note-typeorm-repository";
import TypeOrmDatabaseModule from "@infra/typeorm/typeorm.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [ TypeOrmDatabaseModule, HttpModule ]
})
export default class AppModule {}
