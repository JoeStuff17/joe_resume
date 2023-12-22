import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuList = [
    { id: 1, name: 'home', isSelect: true },
    { id: 2, name: 'professional', isSelect: false },
    { id: 3, name: 'experience', isSelect: false },
    { id: 4, name: 'projects', isSelect: false },
    { id: 5, name: 'contact', isSelect: false }
  ];
  objective = "Hi, I'm Jothiraj, a highly creative and detail-oriented web and graphic designer with over 5 years of experience in the industry. I specialize in creating engaging and user-friendly designs that are both aesthetically pleasing and functional. I am proficient in a wide range of software and programming languages, including Adobe Creative Suite, HTML/CSS, and Python. I have a passion for creating beautiful designs that help businesses grow and succeed. Thank you for visiting my portfolio website!";
  profile: any = {
    name: 'Jothiraj', profession: 'full stack developer', objective: "Hi, I'm Jothiraj, a highly creative and detail-oriented web and graphic designer with over 5 years of experience in the industry. I specialize in creating engaging and user-friendly designs that are both aesthetically pleasing and functional. I am proficient in a wide range of software and programming languages, including Adobe Creative Suite, HTML/CSS, and Python. I have a passion for creating beautiful designs that help businesses grow and succeed. Thank you for visiting my portfolio website!",
    skills: [{ skill: 'Angular 14', knowledge: 89 }, { skill: 'Type Script', knowledge: 80 }, { skill: 'Java Script', knowledge: 65 }, { skill: 'Tailwind Css', knowledge: 93 }, { skill: 'HTML', knowledge: 100 }, { skill: 'Nest Js', knowledge: 81 }, { skill: 'My SQL', knowledge: 75 }, { skill: 'Mongo', knowledge: 80 }],
    contact: [{ name: 'linkedIn', logo: 'icofont-linkedin ', url: 'https://www.linkedin.com/in/jothi-raj-d/' }, { name: 'whatsapp', logo: 'icofont-brand-whatsapp', url: '' }, { name: 'instagram', logo: 'icofont-instagram', url: 'https://www.instagram.com/_me_joe/' }, { name: 'twitter', logo: 'icofont-x', url: 'https://twitter.com/Joeaskinas' }, { name: 'facebook', logo: 'icofont-facebook', url: 'https://www.facebook.com/jothiraj17' }],
    projects: [{ title: 'linkedIn static page', image: '../../assets/linkedIn.webp', description: '', tools: [{name: 'Angular 14'}, {name: 'Tailwind css'}] }, { title: 'Real Estate website', image: '../../assets/real_estate_project.webp', description: '', tools: [{name: 'React Js'}, {name: 'Tailwind css'}] }]
  }

  constructor() { }

  ngOnInit(): void {

  }

  selectMenu(i: number) {
    for (const m of this.menuList) {
      Object.assign(m, { isSelect: false });
    }
    this.menuList[i].isSelect = true;
  }
}
