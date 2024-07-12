import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Добавляем импорт Router

@Component({
  selector: 'main-function-buttons',
  templateUrl: './main-function-buttons.component.html',
  styleUrls: ['./main-function-buttons.component.css'],
  standalone: true,
  imports: [RouterModule] // Импортируем RouterModule
})
export class MainFunctionButtonsComponent {
  constructor(private router: Router) {} // Добавляем Router в конструктор

  moveRequest() {
    this.router.navigate(['/moveReq']); // Функция для навигации
  }
}
