import { Component } from '@angular/core';
import { ContactusComponent } from '../contactus/contactus.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ContactusComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
  
  isTableVisible: boolean = false;
  isParaVisible : boolean=false; 

  testValue=8;
   DispPar(){
      this.isParaVisible=true;
  }
  DispTable(){
    this.isTableVisible=true;
  }
}
