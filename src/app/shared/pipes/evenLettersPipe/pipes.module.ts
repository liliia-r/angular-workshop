import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenLettersFormatPipe } from './evenLettersFormat.pipe';

@NgModule({
  declarations: [
    EvenLettersFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EvenLettersFormatPipe
  ]
})
export class PipesModule { }
