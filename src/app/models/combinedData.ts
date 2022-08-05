import {IPost} from "./post";
import {IUser} from "./user";

export interface ICombinedData extends IUser {
  posts: IPost[]
}
