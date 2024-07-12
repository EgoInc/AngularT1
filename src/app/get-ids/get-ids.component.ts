import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-ids',
  templateUrl: './get-ids.component.html',
  styleUrls: ['./get-ids.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class GetIDsComponent {
  selectedOptions = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false
  };
  output: string = '';

  getSelectedOptions() {
    const selected = Object.keys(this.selectedOptions)
      .filter(key => (this.selectedOptions as any)[key])
      .join(', ');
    this.output = `Выбраны БП: ${selected}`;
  }
}
