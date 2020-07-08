import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeaturesModule } from './features/feautres.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { ContinentPageGuard } from './core/guards/continentPage.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    SharedModule
  ],
  providers: [ContinentPageGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
