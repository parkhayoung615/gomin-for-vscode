import { Command } from "../structure/Command";
import { Position } from "../structure/Position";
import { ActionType } from "../structure/enums";

export class FindPath {
    private jumpPower: number;
    private speed: number;
    private gravity: number;

    constructor(jumpPower:number, speed:number, gravity:number) {
        this.jumpPower = jumpPower;
        this.speed = speed;
        this.gravity = gravity;
    }

    getPath(start:Position, end:Position, land:Map<number, boolean>) : Command[] {
        const commandList: Command[] = [];
        commandList.push( new Command(ActionType.jump, start, end) );

        return commandList;
    }
}
