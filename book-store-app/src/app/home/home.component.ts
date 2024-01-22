import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss','./home.component.scss'],
})
export class HomeComponent {
  title = 'book-store-app';
}
