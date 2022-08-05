import { Component, OnInit } from '@angular/core';
import {StateService} from "../../services/state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(
    public stateService: StateService,
    private router: Router,
  ) {}

  handleUserSelect = (userId: number) => {
    this.stateService.selectUser(userId);
    this.router.navigateByUrl('/posts');
  }
}
