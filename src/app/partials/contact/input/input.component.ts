import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label: string
  @Input() name: string
  @Input() type: string
  @Input() input: boolean
  @Input() model: string
  @Input() form: FormGroup

  constructor() {}

  ngOnInit() {}

}
