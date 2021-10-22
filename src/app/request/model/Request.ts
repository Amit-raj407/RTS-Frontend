import { statusEntity } from "./statusEntity";

export class Request {
    
    reqid!: Number;
    reqdeptcode!: string;
    reqcode!: string;
    reqtitle!: string;
    reqdesc!: string;
    reqassignto!: Number;


    reqinicomment!: string;

    severity!: Number;
    piority!: Number;

    statusEntity!: statusEntity[];
}
