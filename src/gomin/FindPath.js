import { Command } from "../structure/Command";

export class FindPath {
    constructor(jump, speed, gravity) {
        this.jump = jump;
        this.speed = speed;
        this.gravity = gravity;
    }

    getPath(start, end, land) {
        const commandList = [];
        commandList.push(new Command({type: "jump", start, end}));
    }
}

