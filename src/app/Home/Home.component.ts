import { Component, OnInit } from '@angular/core';
import { Card } from '../models/Card';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  card_overview: Card = {
    title: 'Overview: Loopback 3 Api',
    subtitle: 'Mongodb Cluster',
    body: 'This application demo uses Angular 9 for FE and Loopback 3 Api with a Mongodb Cluster for the BE. User authentication is being handled by loopback.'
  }

  constructor() { }

  ngOnInit() {
  }

}
