import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
banner={
  profile_image: "../../../assets/images/profile_pic.jpg",
  profile_image_alt: "profile image",
  heading: "Akshay Sharma",
  subHeading: "Full Stack Developer",
  imgUrl: "../../../assets/images/hero-section.jpg",
  buttonOneText:"Hire Me",
  buttonTwoText: "Download CV",
  url:"https://www.linkedin.com/in/akshaysharma05/"
}
}
