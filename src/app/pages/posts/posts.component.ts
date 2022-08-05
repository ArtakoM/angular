import { Component, OnInit } from '@angular/core';
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(
    public stateService: StateService,
  ) {}
}
