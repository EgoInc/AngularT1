import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fix-dict',
  templateUrl: './fix-dict.component.html',
  styleUrls: ['./fix-dict.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FixDictComponent {
  getKey: string = '';
  deleteKey: string = '';
  updateKeys: string = '';
  getOutput: string = '';
  deleteOutput: string = '';
  updateOutput: string = '';

  getDictionary() {
    this.getOutput = `Получено значение для ключа: ${this.getKey}`;
  }

  deleteDictionary() {
    this.deleteOutput = `Удалено значение для ключа: ${this.deleteKey}`;
  }

  updateDictionary() {
    this.updateOutput = `Измененные ключи словаря: ${this.updateKeys}`;
  }
}
