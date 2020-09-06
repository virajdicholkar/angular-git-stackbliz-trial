import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: [ './parent-form.component.css' ]
})
export class ParentFormComponent  {
  name = 'Angular ' + VERSION.major;
}
