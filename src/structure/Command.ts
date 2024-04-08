import { Position } from "./Position";
import { ActionType } from "./enums";

export class Command {
    private _type: ActionType;
    private _start: Position;
    private _end: Position;

    constructor(type:ActionType, start:Position, end:Position) {
        this._type = type; 
        this._start = start; 
        this._end = end;
    }

    get type() : ActionType {
        return this._type;
    }
    set type(value: ActionType) {
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