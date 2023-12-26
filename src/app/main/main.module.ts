import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './layout/main.component';
import { CreateLetterComponent } from './components/create-letter/create-letter.component';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { AboutProjectComponent } from './components/about-project/about-project.component';
import { MainSidenavComponent } from './components/main-sidenav/main-sidenav.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LetterBlockComponent } from './components/letter-block/letter-block.component';
import { ReceiversListComponent } from './components/receivers-list/receivers-list.component';
import { MatDialogModule } from "@angular/material/dialog";
import { CreateGroupDialogComponent } from './components/receivers-list/components/create-group-dialog/create-group-dialog.component';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTreeModule } from "@angular/material/tree";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    MainComponent,
    CreateLetterComponent,
    AccountSettingComponent,
    AboutProjectComponent,
    MainSidenavComponent,
    LetterBlockComponent,
    ReceiversListComponent,
    CreateGroupDialogComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatTreeModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MainModule { }
