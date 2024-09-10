import {NgModule} from '@angular/core';

import {CounterComponent} from "./component/counter.component";

@NgModule({
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule {
}
