import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {
 
  @ViewChild(ChildComponent ,{static: false}) child : any;
  parentValue= "Hi , I am present in parent component";
  ngAfterViewInit(): void {
      console.log("child value is",this.child.childValue)
  }
}
