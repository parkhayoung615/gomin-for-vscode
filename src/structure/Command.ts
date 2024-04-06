import { Position } from "./Position";

export class Command {
    private _type: string;
    private _start: Position;
    private _end: Position;

    constructor(type:string, start:Position, end:Position) {
        this._type = type; 
        this._start = start; 
        this._end = end;
    }

    get type() : string {
        return this._type;
    }
    set type(value: string) {
        this._type = value;
    }

    get start() : Position {
        return this._start;
    }
    set start(value: Position) {
        this._start = value;
    }

    get end() : Position {
        return this._end;
    }
    set end(value: Position) {
        this._end = value;
    }

}