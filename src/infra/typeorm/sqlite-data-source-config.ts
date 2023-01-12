import { DataSourceOptions } from "typeorm";

const SQLiteDataSourceConfig : DataSourceOptions = {
    type : 'sqlite',
    database : 'db.sqlite',
    synchronize : true,
    entities : []
}

export default SQLiteDataSourceConfig;
