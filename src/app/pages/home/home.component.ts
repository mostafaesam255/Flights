// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filters = [
    { name: 'Amazing pools', icon: 'fas fa-water' },
    { name: 'Amazing views', icon: 'fas fa-mountain' },
    { name: 'OMG!', icon: 'fas fa-exclamation-circle' },
    { name: 'Arctic', icon: 'fas fa-snowflake' },
    { name: 'Farms', icon: 'fas fa-tractor' },
    { name: 'Rooms', icon: 'fas fa-bed' },
    { name: 'Beachfront', icon: 'fas fa-umbrella-beach' },
    { name: 'Trending', icon: 'fas fa-fire' },
    { name: 'Islands', icon: 'fas fa-island-tropical' },
    { name: 'Tiny home', icon: 'fas fa-home' }
  ];

  accommodations = [
    {
      id: 1,
      image: 'img1.png', 
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '24 kilometers away',
      dates: 'May 14–19',
      price: '33,319',
      rating: 5.0
    },
    {
      id: 2,
      image: 'img2.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '18 kilometers away',
      dates: 'May 3–8',
      price: '43,930',
      rating: 4.98
    },
    {
      id: 3,
      image: 'img3.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '10 kilometers away',
      dates: 'May 10–15',
      price: '63,473',
      rating: 4.98
    },
    {
      id: 4,
      image: 'img4.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '19 kilometers away',
      dates: 'May 13–18',
      price: '43,459',
      rating: 5.0
    },
    {
      id: 5,
      image: 'img1.png', // استبدلها برابط صورة حقيقي
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '24 kilometers away',
      dates: 'May 14–19',
      price: '33,319',
      rating: 5.0
    },
    {
      id: 6,
      image: 'img2.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '18 kilometers away',
      dates: 'May 3–8',
      price: '43,930',
      rating: 4.98
    },
    {
      id: 7,
      image: 'img3.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '10 kilometers away',
      dates: 'May 10–15',
      price: '63,473',
      rating: 4.98
    },
    {
      id: 8,
      image: 'img4.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '19 kilometers away',
      dates: 'May 13–18',
      price: '43,459',
      rating: 5.0
    },
    {
      id: 9,
      image: 'img1.png', // استبدلها برابط صورة حقيقي
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '24 kilometers away',
      dates: 'May 14–19',
      price: '33,319',
      rating: 5.0
    },
    {
      id: 10,
      image: 'img2.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '18 kilometers away',
      dates: 'May 3–8',
      price: '43,930',
      rating: 4.98
    },
    {
      id: 11,
      image: 'img3.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '10 kilometers away',
      dates: 'May 10–15',
      price: '63,473',
      rating: 4.98
    },
    {
      id: 12,
      image: 'img4.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '19 kilometers away',
      dates: 'May 13–18',
      price: '43,459',
      rating: 5.0
    },
    {
      id: 13,
      image: 'img1.png', // استبدلها برابط صورة حقيقي
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '24 kilometers away',
      dates: 'May 14–19',
      price: '33,319',
      rating: 5.0
    },
    {
      id: 14,
      image: 'img2.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '18 kilometers away',
      dates: 'May 3–8',
      price: '43,930',
      rating: 4.98
    },
    {
      id: 15,
      image: 'img3.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '10 kilometers away',
      dates: 'May 10–15',
      price: '63,473',
      rating: 4.98
    },
    {
      id: 16,
      image: 'img4.png',
      isGuestFavorite: true,
      location: 'New Cairo 1, Egypt',
      distance: '19 kilometers away',
      dates: 'May 13–18',
      price: '43,459',
      rating: 5.0
    }
  ];

  selectedFilter: string = 'Amazing pools'; // الفلتر الافتراضي

  selectFilter(filterName: string) {
    this.selectedFilter = filterName;
    console.log(`Filter selected: ${filterName}`); // منطق دمية، ممكن تضيف فلترة هنا لاحقًا
  }

  showMore() {
    console.log('Show more clicked'); // منطق دمية، لو عايز تضيف المزيد من الإقامات، قولي
  }
}