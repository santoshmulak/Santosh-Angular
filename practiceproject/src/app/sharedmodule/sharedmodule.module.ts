import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterOnlyDirective } from '../directive/character-only.directive';



@NgModule({
  declarations: [CharacterOnlyDirective],
  imports: [
    CommonModule
  ],
  exports:[CharacterOnlyDirective]
})
export class SharedmoduleModule { }
