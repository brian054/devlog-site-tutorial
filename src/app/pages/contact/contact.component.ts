// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  message = '';
  subject = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.subject = params['subject'] || '';
    });
  }

  onSubmit(): void {
    // For simplicity, we'll just log the form data.
    // In a real application, you'd send this data to a server.
    console.log('Form Submitted', {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    });
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form fields
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
