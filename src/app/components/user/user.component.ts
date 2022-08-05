import {Component, Input} from '@angular/core';
import {ICombinedData} from "../../models/combinedData";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  user?: ICombinedData;
  @Input()
  handleUserSelect: (userId: number) => void = () => {};
}
