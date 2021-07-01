import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {UpdateComponent} from './update/update.component';
import {ListComponent} from './list/list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent } from './dialog/dialog.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import { CreatComponent } from './creat/creat.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    ListComponent,
    DialogComponent,
    CreatComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
