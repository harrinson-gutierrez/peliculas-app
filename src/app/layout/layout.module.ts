import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from '../core/core.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports:[
    CoreModule,
    IonicModule
  ],
  declarations:
  [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  providers: []
})
export class LayoutModule { }
