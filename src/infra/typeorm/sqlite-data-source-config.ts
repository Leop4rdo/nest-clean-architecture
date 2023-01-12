import { DataSourceOptions } from "typeorm";
import NoteModel from "./models/note-model";

const SQLiteDataSourceConfig : DataSourceOptions = {
    type : 'sqlite',
    database : 'db.sqlite',
    synchronize : true,
    entities : [NoteModel]
}

export default SQLiteDataSourceConfig;
