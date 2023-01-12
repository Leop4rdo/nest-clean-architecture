import { randomUUID } from "crypto";
import ContentVO from "../value-objects/content";

export type NoteProps = {
    id ?: string
    title : string
    content : string
    createdAt ?: Date
}


export default class Note {
    private _id : string;
    private _title : string;
    private _content : ContentVO;
    private _createdAt : Date;
    
    constructor(props : NoteProps ) {
        this._id = props.id ?? randomUUID();
        this._title = props.title;
        this._content = new ContentVO(props.content);
        this._createdAt = props.createdAt ?? new Date(); 
    }

    public get title() : string { return this._title }

    public set title(title : string) { this._title = title }

    public get content() : ContentVO { return this._content }

    public set content(content : ContentVO) { this._content = content }

    public get createdAt() : Date { return this._createdAt }

    public set createdAt(createdAt : Date) { this._createdAt = createdAt }

    public get id() : string { return this._id }

    public withTitle(title : string) : Note {
        this._title = title;
        return this;
    }

    public withContent(content : ContentVO) : Note {
        this._content = content;
        return this;
    }
}
