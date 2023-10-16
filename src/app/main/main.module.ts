import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './layout/main.component';
import { CreateLetterComponent } from './components/create-letter/create-letter.component';
import { LettersLogComponent } from './components/letters-log/letters-log.component';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { MainSidenavComponent } from './components/main-sidenav/main-sidenav.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { ReactiveFormsModule } from "@angular/forms";
import { LetterBlockComponent } from './components/letter-block/letter-block.component';


@NgModule({
  declarations: [
    MainComponent,
    CreateLetterComponent,
    LettersLogComponent,
    AccountSettingComponent,
    AboutProjectComponent,
    MainSidenavComponent,
    LetterBlockComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
