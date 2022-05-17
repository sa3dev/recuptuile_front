import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  @Input() textValue: string;

  constructor() { }

  ngOnInit() {
  }

}
