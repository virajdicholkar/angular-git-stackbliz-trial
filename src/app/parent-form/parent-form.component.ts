import { Component, VERSION, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: [ './parent-form.component.css' ]
})
export class ParentFormComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  parentForm: FormGroup;
  newPerson = {}
  personList = [
    {
      firstName: 'Micky',
      lastName: 'Mouse'
    }
  ]
  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(){
    this.parentForm = this.formBuilder.group({
      personList: this.formBuilder.array([])
    });

    this.personList.forEach((person)=>this.addToList(person));
  }

  get f(){
    return this.parentForm.controls; 
  }

  addToList(data = {}){
    const list = this.f['personList'] as FormArray;
    const listItem = this.formBuilder.control(data);
    list.push(listItem);
    this.newPerson = {};
  }

  removeFromList(index){
    const list = this.f['personList'] as FormArray;
    list.removeAt(index);
  }
}
