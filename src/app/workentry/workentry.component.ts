import {Component, Inject, forwardRef, OnInit} from '@angular/core';
import {USER,User} from  '../models/User';
import { commonsInstances } from '../models/Acommons';
@Component({
  selector: 'app-workentry',
  templateUrl: './workentry.component.html',
  styleUrls: ['./workentry.component.css']
})
export class WorkentryComponent implements OnInit {

  constructor( @Inject(commonsInstances) private commonsInstances : commonsInstances) { }

  ngOnInit() {

    require("../../assets/js/custom.js");
  }

  public logout(){
    console.log("loguot!!!!!!!!!!!!!!!");
  }
}
