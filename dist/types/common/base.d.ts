import { StatusType } from "./constants";
export interface Base {
    readonly id: string;
    status: StatusType;
    createdAt: Date;
    updatedAt: Date;
}
