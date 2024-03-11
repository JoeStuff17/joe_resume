import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

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
    contact: [{ name: 'linkedIn', logo: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/jothi-raj-d/' }, { name: 'whatsapp', logo: 'fa-brands fa-whatsapp', url: '' }, { name: 'instagram', logo: 'fa-brands fa-instagram', url: 'https://www.instagram.com/_me_joe/' }, { name: 'twitter', logo: 'fa-brands fa-x-twitter', url: 'https://twitter.com/Joeaskinas' }, { name: 'facebook', logo: 'fa-brands fa-square-facebook', url: 'https://www.facebook.com/jothiraj17' }],
    projects: [{ title: 'linkedIn static page', image: '../../assets/linkedIn.webp', description: '', url: 'https://linkedin-joe-static.web.app', tools: [{ name: 'Angular 14' }, { name: 'Tailwind css' }] }, { title: 'Real Estate website', image: '../../assets/real_estate_project.webp', description: '', url: 'https://aj-real-estate.web.app', tools: [{ name: 'React Js' }, { name: 'Tailwind css' }] }],
    journey: [
      { title: 'BCA',
        year: '2015-2018',
        role: 'Bachelor of Computer Application',
        description: 'I am a graduate of BCA from Patrician College of Arts and Science, where I graduated with honors in the first class. Recognized as an outstanding student, I received the Outstanding Student Award for my dedication to academic excellence and overall contributions to the college community.'
      },
      { title: 'MCA',
        year: '2019-2021',
        role: 'Master of Computer Application',
        description: 'I further pursued a Master of Computer Application (MCA) at TNOU, achieving the same distinction of graduating in the first class. These educational accomplishments reflect my strong dedication to learning and achieving excellence in the field of computer applications.'
      },
      { title: 'ReadyAssist',
        year: '2022-2023',
        role: 'Intern (Software Engineer)',
        description: 'I have practical experience gained through a 6-month internship at ReadyAssist, where I worked from November 2022 to May 2023. This internship allowed me to apply and enhance my skills in a real-world professional setting, contributing to my overall professional growth.'
      },
      { title: 'ReadyAssist',
        year: '2023-Till Now',
        role: 'Associate Software Engineer',
        description: "I began my journey at ReadyAssist. I embraced numerous learning opportunities and gradually transitioned to backend development. Now serving as a full-stack developer, I've gained valuable insights and honed my skills in creating end-to-end solutions."
      },
    ]
  }

  @ViewChild('skill', { static: false, read: ElementRef })
  skill: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      let data = document.getElementById('profession');
      if (data) {
        data.classList.add('opacity1')
      }
    }, 400);

    document.addEventListener("scroll", (event) => {
      if (window.innerHeight > this.getDivPosition(this.skill.nativeElement).top) {
        for (let i = 0; i < this.profile.skills.length; i++) {
          let barAnime = document.getElementById('bar' + i);
          if (barAnime) {
            barAnime.classList.add('scale')
          }
        }
      }
    });
  }

  getDivPosition(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const position = {
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
    return position;
  }

  ngOnInit(): void {

  }

  selectMenu(i: number) {
    for (const m of this.menuList) {
      Object.assign(m, { isSelect: false });
    }
    this.menuList[i].isSelect = true;
  }

  openProject(url: string) {
    window.open(url, '_blank');
  }

  sendMessage(){
    //
  }
}
