import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CloudMessagingComponent } from './cloud-messaging/cloud-messaging.component';


const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'messaging', component: CloudMessagingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
