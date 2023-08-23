import ValueObject from "./value-objet.interface";
import { v4 as uuidv4 } from 'uuid';

export default class Id implements ValueObject {
    private _id: string;

    constructor(id?: string) {
        this._id = id || uuidv4();
    }

    get Id(): string {
        return this._id;
    }
}