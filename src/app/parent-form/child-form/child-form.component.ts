import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'child-form',
  templateUrl: './child-form.component.html',
  styleUrls: [ './child-form.component.css' ]
})
export class ChildFormComponent  {
  name = 'Angular ' + VERSION.major;
}
