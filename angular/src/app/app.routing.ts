import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./modules/home/home.component"
import { EventComponent } from "./modules/events/event.component"

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "event",
        component: EventComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}