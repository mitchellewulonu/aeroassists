import {profileinfo} from "./profileinfo.model";
import {Deserializable} from "./deserializable.model";

export class Profile {
	name:string;
	country:string;
	services:Array<any>;
	Profile:profileinfo;
	DP:string;
	

 /* deserialize(input: any) :Profile{
    Object.assign(this, input);
     this.Profile = new profileinfo().deserialize(input.Profile);
    return this;
  }*/

}
