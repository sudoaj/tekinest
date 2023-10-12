import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  @Input() icon: string
  @Input() title: string
  @Input() description: string

  constructor() { }

  ngOnInit() {
  }

}
