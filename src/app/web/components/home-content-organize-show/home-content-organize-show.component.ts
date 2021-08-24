import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-content-organize-show',
  templateUrl: './home-content-organize-show.component.html',
  styleUrls: ['./home-content-organize-show.component.css']
})
export class HomeContentOrganizeShowComponent implements OnInit {


  cellsToShow:number = 5

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth <= 300){
      this.cellsToShow = 2;
    }
  }

@HostListener('window:resize', ['$event'])
onResize(event:any) {
   
   if(window.innerWidth <= 300){
     this.cellsToShow = 2;
   }else if(window.innerWidth > 1040){
    this.cellsToShow = 5;
   }

}

}