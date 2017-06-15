import {Component, Inject, forwardRef, OnInit} from '@angular/core';
import {commonsInstances  }from "../models/Acommons";
import {USER,User} from  '../models/User';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  public user;
  constructor(
    @Inject(commonsInstances) private commonsInstances : commonsInstances
  )
  { this.user=USER.getMember()
  }

  ngOnInit() {
  }
  public logout(): void {
    this.commonsInstances.logout()
  }

}
