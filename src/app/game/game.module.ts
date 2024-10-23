import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CalculatorComponent } from "./game.component";
import { CalculatorRoutingModule } from "./game-routing.module";
import { CalculatorService } from "./game.service";

@NgModule({
    declarations: [
      CalculatorComponent
    ],
    imports: [
      CommonModule,
      CalculatorRoutingModule,
      ReactiveFormsModule
    ],
    providers: [
      CalculatorService
    ]
  })
  export class CalculatorModule {

   }