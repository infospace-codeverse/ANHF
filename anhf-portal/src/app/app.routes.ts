import { Routes } from '@angular/router';

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
import { AttendanceComponent } from './attendance/attendance.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { GroupBeneficiaryComponent } from './group-beneficiary/group-beneficiary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { GroupLeaderComponent } from './group-leader/group-leader.component';
// import { IndividualBeneficiaryComponent } from './individual-beneficiary/individual-beneficiary.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'foundation', component: FoundationComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'errorPage', component: ErrorPageComponent },
  {
    path: 'portal',
    component: PortalComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'activities', component: ActivityComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'members', component: AddMemberComponent },
      { path: 'beneficiaries', component: GroupBeneficiaryComponent },
    ],
  },
  { path: '**', redirectTo: 'errorPage' } /** Add 404 page */,
];
