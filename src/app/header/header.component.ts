import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isActive : boolean = true;
  testValue=8;
  showArr=[1,2,3,4,5,6];
  
  jsonArr=[
    {
      id:1,
      Name: "Vaishali",
      Skill:"java"
    },
    {
      id:2,
      Name:"Smriti",
      Skill:"C++"
    },
    {
      id:3,
      Name:"Reem",
      Skill:"C#"
    }
  ]

  hidebt(){
    this.isActive =false;
  }
}
