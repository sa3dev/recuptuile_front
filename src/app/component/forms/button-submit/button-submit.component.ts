import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss']
})
export class ButtonSubmitComponent implements OnInit {
  // @Input() value: string;
  constructor() { }

  ngOnInit() {
  }


  onClick() {
    console.log('test de button');
  }
}
