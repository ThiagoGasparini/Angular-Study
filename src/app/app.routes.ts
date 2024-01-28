import { Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

export const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'ListRender', component: ListRenderComponent },
  { path: 'Directives', component: DirectivesComponent },
  { path: 'IfRender', component: IfRenderComponent },
  { path: 'Events', component: EventsComponent },
  { path: 'Emitter', component: EmitterComponent },
  { path: 'Pipes', component: PipesComponent },
  { path: 'TwoWay', component: TwoWayBindingComponent },

];
