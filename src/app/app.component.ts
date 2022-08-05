import {Component, OnInit} from '@angular/core';
import {UsersService} from "./services/users.service";
import {PostsService} from "./services/posts.service";
import {combineUsersAndPosts} from "./helpers/combine-users-and-posts";
import {ICombinedData} from "./models/combinedData";
import {Router} from "@angular/router";
import {StateService} from "./services/state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Test';
  loading = false;

  constructor(
    private usersService: UsersService,
    private postService: PostsService,
    private stateService: StateService,
    private router: Router,
  ) {}


  ngOnInit() {
    this.loading = true;

    this.usersService.getUsers().subscribe((users) => {
      this.postService.getPosts().subscribe( async (posts) => {
        this.stateService.getCombinedData(users, posts).then(() => {
          this.loading = false;
          this.router.navigateByUrl('/users')
        })
      })
    })
  }
}
