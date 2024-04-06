import { Command } from "../structure/Command";
import { Position } from "../structure/Position";

export class FindPath {
    private jump: number;
    private speed: number;
    private gravity: number;

    constructor(jump:number, speed:number, gravity:number) {
        this.jump = jump;
        this.speed = speed;
        this.gravity = gravity;
    }

    getPath(start:Position, end:Position, land:Map<number, boolean>) : Command[] {
        const commandList: Command[] = [];
        commandList.push( new Command("jump", start, end) );

        return commandList;
    }
}

