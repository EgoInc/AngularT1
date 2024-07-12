import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Добавляем FormsModule

@Component({
  selector: 'app-move-req',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './move-req.component.html',
  styleUrl: './move-req.component.css'
})
export class MoveReqComponent {
  requestId: string = '';
  state: string = 'workStarted';
  output: string = '';

  processRequest() {
    this.output = `ID заявки: ${this.requestId}, Состояние: ${this.state}`;
  }
}