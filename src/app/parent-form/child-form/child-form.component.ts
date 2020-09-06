import { Component, VERSION, forwardRef, OnInit } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
} from '@angular/forms';
const PERSON_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => ChildFormComponent),
  multi: true,
};

@Component({
  selector: 'child-form',
  templateUrl: './child-form.component.html',
  styleUrls: [ './child-form.component.css' ],
  providers: [PERSON_VALUE_ACCESSOR],
})
export class ChildFormComponent implements OnInit {
  
  onChange: (value) => {};
  onTouched: () => {};
  personForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ){}
  ngOnInit(){
    this.personForm = this.formBuilder.group({
      firstName: '',
      lastName: ''
    })
  }

  //cva methods
    // CVA method
  writeValue(obj: any): void {
    this.personForm.patchValue(obj);
  }

  // CVA method
  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.personForm.valueChanges.subscribe((data) => {
      fn(data);
    });
  }

  // CVA method
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
