import HttpModule from "@infra/http/http.module";
import TypeOrmDatabaseModule from "@infra/typeorm/typeorm.module";
import { Module } from "@nestjs/common";

@Module({
    imports: [ HttpModule, TypeOrmDatabaseModule ]
})
export default class AppModule {}
