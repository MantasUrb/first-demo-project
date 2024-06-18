import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  //decribing exports array so that modules that not only needed internally for CardComponent & other modules declared above
  // but also to make them available to any other module, that potentially imports SharedModule
  exports: [CardComponent],
})
export class SharedModule {}
