import { Column, CreateDateColumn, Entity, PrimaryColumn, Timestamp } from "typeorm";

@Entity('notes')
export default class NoteModel {
    @PrimaryColumn()
    id : string

    @Column()
    title : string

    @Column()
    content : string

    @Column({ name : 'created_at' })
    createdAt : string
}
