import { Routes } from '@angular/router';

import { WrapperComponent } from './wrapper/wrapper.component'; // Import the wrapper component
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FoundationComponent } from './foundation/foundation.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AuthGuard } from './auth/auth.guard';

import { ActivityComponent } from './activity/activity.component';
import { MemberComponent } from './member/member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';

export const routes: Routes = [
  { path: 'not-found', component: ErrorPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'foundation', component: FoundationComponent },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'activities', component: ActivityComponent },
      { path: 'members', component: MemberComponent },
      { path: 'beneficiaries', component: BeneficiaryComponent },
      { path: 'groups', component: GroupComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  } /** Add 404 page */,
];
