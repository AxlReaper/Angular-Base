
import { NgModule } from "@angular/core";
import { CounterComponent } from "./comonents/counter.component";


@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})

export class CounterModule{}
