/**
 * Created by Administrator on 2017/4/13.
 */
/**
 * Created by Administrator on 2017/4/13.
 */
import { UsersComponent } from './users.component';
import { UsersAuthComponent } from './users-auth/users-auth.component';
import { UsersBlackComponent } from './users-black/users-black.component';

export const usersRoutes = [{
  path: '',
  component: UsersComponent,
  children: [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: UsersAuthComponent },
    { path: 'black', component: UsersBlackComponent }
  ]
}];
