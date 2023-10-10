import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./layout/main.component";
import { CreateLetterComponent } from "./components/create-letter/create-letter.component";
import { LettersLogComponent } from "./components/letters-log/letters-log.component";
import { AccountSettingComponent } from "./components/account-setting/account-setting.component";
import { AboutProjectComponent } from "./components/about-project/about-project.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create-letter',
      },
      {
        path: 'create-letter',
        component: CreateLetterComponent,
      },
      {
        path: 'letters-log',
        component: LettersLogComponent,
      },
      {
        path: 'account-settings',
        component: AccountSettingComponent,
      },
      {
        path: 'about-project',
        component: AboutProjectComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
