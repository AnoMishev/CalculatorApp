import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculatorComponent } from "./game.component";
const routes: Routes = [
    {
        path: '',
        component: CalculatorComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    
})
export class CalculatorRoutingModule {
    
}