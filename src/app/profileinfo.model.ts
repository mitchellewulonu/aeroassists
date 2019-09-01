import {Deserializable} from "./deserializable.model";

export class profileinfo {
  Bio: string;


   deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}