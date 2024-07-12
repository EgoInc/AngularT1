import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainFunctionButtonsComponent } from './main-function-buttons/main-function-buttons.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, MainFunctionButtonsComponent, RouterModule]
})
export class AppComponent { }
