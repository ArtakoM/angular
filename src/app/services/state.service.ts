import { Injectable } from '@angular/core';
import {ICombinedData} from "../models/combinedData";
import {IUser} from "../models/user";
import {IPost} from "../models/post";
import {combineUsersAndPosts} from "../helpers/combine-users-and-posts";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() {}
  combinedData: ICombinedData[] = [];
  selectedUser?: ICombinedData = undefined;

  async getCombinedData(users: IUser[], posts: IPost[]): Promise<ICombinedData[]> {
    const combinedData = await combineUsersAndPosts(users, posts);
    this.combinedData = combinedData;
    return combinedData;
  }

  selectUser(userId: number): ICombinedData {
    const selectedUser = this.combinedData.find(i => i.id === userId);
    this.selectedUser = selectedUser;
    return selectedUser as ICombinedData;
  }
}
