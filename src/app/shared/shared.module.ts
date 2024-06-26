import { CommonModule } from "@angular/common";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinner } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
    AlertComponent,
    LoadingSpinner,
    PlaceholderDirective,
    DropdownDirective
    ],
    imports:[CommonModule],
    exports:[AlertComponent,
    LoadingSpinner,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule]
})
export class SharedModule{

}