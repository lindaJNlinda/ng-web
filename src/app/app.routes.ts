import { LoginComponent } from './login/login.component';
import { AppErrorComponent } from './error/app.error.component';

export const appRoutes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'workentry',
    loadChildren: './workentry/workentry.module#WorkentryModule'
	},
  {
    path: "error/:message",
    component: AppErrorComponent
  },
  {
    path: '**', // fallback router must in the last
    component: LoginComponent
  }
];
