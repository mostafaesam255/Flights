// src/app/shared/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchData = {
    where: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  };

  suggestedDestinations = [
    { name: 'Nearby', description: "Find what's around you", icon: 'fas fa-map-marker-alt' },
    { name: 'Cairo, Egypt', description: 'For a trip abroad', icon: 'fas fa-city' },
    { name: 'Istanbul, Türkiye', description: 'For sights like Galata Tower', icon: 'fas fa-tree' },
    { name: 'Madinty, Egypt', description: 'Near you', icon: 'fas fa-water' },
    { name: 'Dahab, Egypt', description: 'For nature-lovers', icon: 'fas fa-umbrella-beach' },
    { name: 'Beirut, Lebanon', description: 'Popular beach destination', icon: 'fas fa-building' }
  ];

  showSuggestions = false;
  showDatePicker = false;
  showGuestsPicker = false; // متغير جديد للتحكم في إظهار قايمة الضيوف
  activeTab: 'dates' | 'months' | 'flexible' = 'dates';
  dateRange: { start: Date | null; end: Date | null } = { start: null, end: null };

  // متغيرات لتخزين أعداد الضيوف
  guests = {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  };

  onFocus() {
    this.showSuggestions = true;
  }

  onBlur() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }

  selectDestination(destination: string) {
    this.searchData.where = destination;
    this.showSuggestions = false;
  }

  toggleDatePicker() {
    this.showDatePicker = !this.showDatePicker;
  }

  onDateRangeChange() {
    if (this.dateRange.start && this.dateRange.end) {
      this.searchData.checkIn = this.formatDate(this.dateRange.start);
      this.searchData.checkOut = this.formatDate(this.dateRange.end);
      this.showDatePicker = false;
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  }

  addDays(days: number) {
    if (!this.dateRange.start) {
      this.dateRange.start = new Date();
    }
    const startDate = new Date(this.dateRange.start);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + days);
    this.dateRange = { start: startDate, end: endDate };
    this.searchData.checkIn = this.formatDate(startDate);
    this.searchData.checkOut = this.formatDate(endDate);
    this.showDatePicker = false;
  }

  // فتح وإغلاق قايمة الضيوف
  toggleGuestsPicker() {
    this.showGuestsPicker = !this.showGuestsPicker;
  }

  // زيادة وتقليل الأعداد
  increment(type: 'adults' | 'children' | 'infants' | 'pets') {
    this.guests[type]++;
    this.updateGuestsInput();
  }

  decrement(type: 'adults' | 'children' | 'infants' | 'pets') {
    if (this.guests[type] > 0) {
      this.guests[type]--;
      this.updateGuestsInput();
    }
  }

  // تحديث حقل الـ Input بناءً على الأعداد
  updateGuestsInput() {
    const totalGuests = this.guests.adults + this.guests.children + this.guests.infants;
    const petsText = this.guests.pets > 0 ? `, ${this.guests.pets} pet${this.guests.pets > 1 ? 's' : ''}` : '';
    this.searchData.guests = totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}${petsText}` : '';
  }

  onSearch() {
    console.log('Search Data:', this.searchData);
  }
}