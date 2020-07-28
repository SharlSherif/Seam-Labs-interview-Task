import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card';

@Component({
  selector: 'app-wwo',
  templateUrl: './wwo.component.html',
  styleUrls: ['./wwo.component.css'],
})
export class WwoComponent implements OnInit {
  cards: Card[] = [
    {
      icon: 'assets/process-icon.svg',
      title: 'social media management',
      description: `Perfect for growing your brand’s social community and engage with the right 
      audience. We manage everything from curation of content to management of 
      comments and everything in between.`,
    },
    {
      icon: 'assets/social-media-icon.svg',
      title: 'social growth campaign',
      description: `Perfect for growing your brand’s social community and engage with the right 
      audience. We manage everything from curation of content to management of 
      comments and everything in between.`,
    },
    {
      icon: 'assets/responsive-icon.svg',
      title: 'branding & media',
      description: `Perfect for growing your brand’s social community and engage with the right 
      audience. We manage everything from curation of content to management of 
      comments and everything in between.`,
    },
    {
      icon: 'assets/analysis-icon.svg',
      title: 'influencer marketing',
      description: `Perfect for growing your brand’s social community and engage with the right 
      audience. We manage everything from curation of content to management of 
      comments and everything in between.`,
    },
    {
      icon: 'assets/social-media-ads.svg',
      title: 'social media advertising',
      description: `Perfect for growing your brand’s social community and engage with the right 
      audience. We manage everything from curation of content to management of 
      comments and everything in between.`,
    },
    {
      icon: 'assets/computer-icon.svg',
      title: 'marketing services',
      description: `Perfect for growing your brand’s social community and engage with the right 
      audience. We manage everything from curation of content to management of 
      comments and everything in between.`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
