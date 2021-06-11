import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  formContact: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formContact = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])]
    });
  }
  get errorCtr() {
    return this.formContact.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.formContact.valid) {
      console.log('All fields are required.');
      return false;
    } else {
      console.log(this.formContact.value);
    }
  }
}
