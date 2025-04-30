import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accommodation-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.css']
})
export class AccommodationDetailsComponent implements OnInit {
  accommodation: any = null;

  // بيانات دمية للإقامة اللي ID بتاعها 1
  accommodations = [
    {
      id: 1,
      title: 'Cabin with stunning fjord view',
      type: 'Entire cabin',
      location: 'Inderøy, Norway',
      guests: 9,
      bedrooms: 3,
      beds: 5,
      baths: 1,
      rating: 4.89,
      reviews: 128,
      price: '28,422',
      currency: 'E£',
      nights: 5,
      checkIn: '5/4/2025',
      checkOut: '5/9/2025',
      host: {
        name: 'Marius',
        status: 'Superhost',
        hostingYears: 4,
        image: 'https://via.placeholder.com/40'
      },
      features: [
        { name: 'Self check-in', description: 'Check yourself in with the lockbox.', icon: 'fas fa-door-open' },
        { name: 'Great location', description: 'Guests who stayed here in the past year loved the location.', icon: 'fas fa-map-marker-alt' },
        { name: 'Ocean and beach views', description: 'Soak up the views during your stay.', icon: 'fas fa-water' }
      ],
      isGuestFavorite: true,
      images: [
        'img6.webp', // الصورة الرئيسية
        'img7.avif', // الصور الصغيرة
        'img8.avif',
        'img9.avif',
        'img10.avif'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.accommodation = this.accommodations.find(acc => acc.id === +id!);
  }
}