import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
      LayoutComponent,
      HeaderComponent,
      FooterComponent,
      
    ],
    imports: [
      SharedModule
      ],
      exports:[
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
      ],
      providers: [],
      bootstrap: [LayoutComponent]
    })
    export class LayoutModule { }