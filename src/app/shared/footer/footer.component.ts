import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  tabs = [
    'Unique stays',
    'Categories',
    'Travel tips & inspiration',
    'Airbnb-friendly apartments'
  ];

  activeTab: string = 'Unique stays'; 

  uniqueStays = [
    { name: 'Cabins', location: 'United States' },
    { name: 'Treehouses', location: 'United States' },
    { name: 'Glamping', location: '' },
    { name: 'Tiny Houses', location: 'United States' },
    { name: 'Beach Houses', location: 'United States' },
    { name: 'Campers and RVs', location: 'United Kingdom' },
    { name: 'Lakehouses', location: 'United States' },
    { name: 'Yurt Rentals', location: 'United Kingdom' },
    { name: 'Yurt Rentals', location: 'United States' },
    { name: 'Castle Rentals', location: 'United Kingdom' },
    { name: 'Houseboats', location: 'United States' },
    { name: 'Holiday Caravans', location: 'United Kingdom' },
    { name: 'Private Island Rentals', location: 'United States' },
    { name: 'Farm Houses', location: 'United Kingdom' },
    { name: 'Farm Cottages', location: '' },
    { name: 'Cabin Rentals', location: 'Australia' },
    { name: 'Luxury Cabins', location: 'United Kingdom' }
  ];

  categories = [
    'Amazing pools',
    'Arctic',
    'Camping',
    'Campers',
    'Castles',
    'Containers',
    'Countryside',
    'Design',
    'Earth homes',
    'Farms',
    'National parks',
    'Vineyards',
    'OMG!',
    'Tiny homes',
    'Towers',
    'Windmills',
    'Luxe'
  ];

  travelTips = [
    { name: 'Family travel hub', description: 'Tips and inspiration for family travel' },
    { name: 'Family budget travel', description: 'Get there for less' },
    { name: 'Vacation ideas for any budget', description: 'Make it special without making it spendy' },
    { name: 'Travel Europe on a budget', description: 'How to take the kids to Europe for less' },
    { name: 'Outdoor adventure', description: 'Explore nature with the family' },
    { name: 'Bucket list national parks', description: 'Must-see parks for family travel' },
    { name: 'Kid-friendly state parks', description: 'Check out the family-friendly highlights' }
  ];

  apartments = [
    { name: 'Atlanta Metro', location: 'Georgia' },
    { name: 'Augusta', location: 'Georgia' },
    { name: 'Austin Metro', location: 'Texas' },
    { name: 'Baton Rouge', location: 'Louisiana' },
    { name: 'Birmingham', location: 'Alabama' },
    { name: 'Boise', location: 'Idaho' },
    { name: 'Boston Metro', location: 'Massachusetts' },
    { name: 'Boulder', location: 'Colorado' },
    { name: 'Charlotte', location: 'North Carolina' },
    { name: 'Chicago Metro', location: 'Illinois' },
    { name: 'Cincinnati', location: 'Ohio' },
    { name: 'Columbia', location: 'South Carolina' },
    { name: 'Columbus', location: 'Ohio' },
    { name: 'Dallas', location: 'Texas' },
    { name: 'Denver', location: 'Colorado' },
    { name: 'Fayetteville', location: 'North Carolina' },
    { name: 'Fort Worth', location: 'Texas' }
  ];

  supportLinks = [
    'Help Center',
    'AirCover',
    'Anti-discrimination',
    'Disability support',
    'Cancellation options',
    'Report neighborhood concern'
  ];

  hostingLinks = [
    'Airbnb your home',
    'AirCover for Hosts',
    'Hosting resources',
    'Community forum',
    'Hosting responsibly',
    'Airbnb-friendly apartments',
    'Join a free Hosting class',
    'Find a co-host'
  ];

  airbnbLinks = [
    'Newsroom',
    'New features',
    'Careers',
    'Investors',
    'Gift cards',
    'Airbnb.org emergency stays'
  ];

  bottomLinks = [
    'Terms',
    'Sitemap',
    'Privacy',
    'Your Privacy Choices'
  ];

  socialIcons = [
    { name: 'Facebook', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', icon: 'fab fa-twitter' },
    { name: 'Instagram', icon: 'fab fa-instagram' }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  showMore() {
    console.log('Show more clicked');
  }
}