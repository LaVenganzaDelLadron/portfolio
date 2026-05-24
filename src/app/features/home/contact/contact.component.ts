import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionTitleComponent],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add logic for sending email or showing success message
    alert('Thank you for your message! I will get back to you soon.');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}
