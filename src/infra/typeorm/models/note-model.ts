import { Column, CreateDateColumn, Entity, PrimaryColumn, Timestamp } from "typeorm";

@Entity('notes')
export default class NoteModel {
    @PrimaryColumn()
    id : string

    @Column()
    title : string

    @Column()
    content : string

    @Column('timestamptz', { name : 'created_at' })
    createdAt : Timestamp
}
