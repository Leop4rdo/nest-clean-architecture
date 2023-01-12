import { BadRequestException } from "@nestjs/common";

export default class ContentVO {
    private _value : string;

    constructor(value : string) {
        if (value.length > 255)
            throw new Error('Content too large error')

        this._value = value;
    }

    public get value() : string { return this._value }
}
