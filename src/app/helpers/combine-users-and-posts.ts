import {IUser} from "../models/user";
import {IPost} from "../models/post";

export const combineUsersAndPosts = async (users: IUser[], posts: IPost[]) => {
  return users.map(user => ({
    ...user,
    posts: posts.filter(i => i.userId === user.id),
  }));
}
