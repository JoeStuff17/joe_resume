import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  profile: any = {
    name: 'Jothiraj', profession: 'full stack developer', objective: "Hi, I'm Jothiraj, With nearly two years of hands-on experience spanning both frontend and backend development, my career showcases a versatile skill set and a deep understanding of web technologies. Proficient in Angular 15, HTML, and Tailwind CSS, On the backend, my expertise lies in utilizing NestJS to build robust and scalable applications, complemented by adeptness in working with both MySQL and MongoDB databases. My journey in the tech industry has been defined by a commitment to delivering high-quality solutions that meet client needs and exceed expectations. Thank you for visiting my portfolio website!",
    skills: [{ skill: 'Angular 14', knowledge: 89 }, { skill: 'Type Script', knowledge: 80 }, { skill: 'Java Script', knowledge: 65 }, { skill: 'Tailwind Css', knowledge: 93 }, { skill: 'HTML', knowledge: 100 }, { skill: 'Nest Js', knowledge: 81 }, { skill: 'My SQL', knowledge: 75 }, { skill: 'Mongo', knowledge: 80 }],
    contact: [{ name: 'linkedIn', logo: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/jothi-raj-d/' }, { name: 'whatsapp', logo: 'fa-brands fa-whatsapp', url: 'https://api.whatsapp.com/send?phone=919962675336&text=Hello%20Jothiraj!' }, { name: 'instagram', logo: 'fa-brands fa-instagram', url: 'https://www.instagram.com/_me_joe/' }, { name: 'twitter', logo: 'fa-brands fa-x-twitter', url: 'https://twitter.com/Joeaskinas' }, { name: 'facebook', logo: 'fa-brands fa-square-facebook', url: 'https://www.facebook.com/jothiraj17' }],
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
  mailForm: any;

  @ViewChild('skill', { static: false, read: ElementRef })
  skill: ElementRef<HTMLDivElement>;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly matSnackBar: MatSnackBar,
  ){
    this.mailForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/)]],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

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

  sendMessage() {
    if (this.mailForm.valid) {
      window.location.href = 'mailto:jothiraj281@gmail.com?subject=' + 'I am contacting throw your website' +
        '&body=' + `Hi, Im ${this.mailForm.get('name')?.value} ${this.mailForm.get('message')?.value} ,Please contact me on ${this.mailForm.get('mobile')?.value}`;
        this.mailForm.reset();
    } else {
      this.matSnackBar.open('Please fill all the inputs with proper details', '', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: 'alert'
      });
    }
  }

  downloadResume(){
    window.open(`https://joestuff-bucket.s3.ap-south-1.amazonaws.com/profile/Joe_resume.pdf`, '_blank')
  }
}
