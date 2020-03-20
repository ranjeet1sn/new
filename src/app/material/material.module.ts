import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  MatToolbarModule,
  MatInputModule ,
  MatFormFieldModule,
  MatCardModule, MatMenuModule,
   MatExpansionModule,
   MatSidenavModule,
   MatButtonModule,
   MatIconModule,
   MatListModule,
   MatTooltipModule,
   MatAccordion,
   MatSlideToggleModule,
   MatTabsModule,
   MatGridListModule,
   MatDividerModule,
   MatSelectModule,
   MatDialogModule,
 MatTableModule,
 MatAutocompleteModule,
 MatStepperModule,
 MatDatepickerModule
  } from '@angular/material';

const MaterialComponent = [
  MatSidenavModule,
  MatMenuModule,
  MatExpansionModule,
  MatCardModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatTabsModule,
  MatGridListModule,
  MatSelectModule,
  MatDialogModule,
  MatSidenavModule,
  MatTableModule,
  MatTooltipModule,
  DragDropModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatStepperModule
];
@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class MaterialModule { }
