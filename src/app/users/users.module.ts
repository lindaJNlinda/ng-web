/**
 * Created by Administrator on 2017/4/13.
 */
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

import { usersRoutes } from './users.routes';

import { UsersAuthComponent } from './users-auth/users-auth.component';
import { UsersBlackComponent } from './users-black/users-black.component';

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [
    UsersComponent,
    UsersAuthComponent,
    UsersBlackComponent
  ]
})
export class UsersModule { }
