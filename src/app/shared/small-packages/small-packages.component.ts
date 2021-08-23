import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-packages',
  templateUrl: './small-packages.component.html',
  styleUrls: ['./small-packages.component.css']
})
export class SmallPackagesComponent {
  
  @Input() title:           string = ""
  @Input() titleParteOne:   string = ""
  @Input() titleParteTwo:   string = ""

  @Input() oneCardPrice:    string = ""
  @Input() cardMonth:       string = ""
  @Input() oneCardPetite:   string = ""
  @Input() oneCardItemOne:  string = ""
  @Input() cardItemTwo:     string = ""
  @Input() oneCardItemThree:string = ""
  @Input() cardItemFour:    string = ""
  @Input() cardItemFive:    string = ""
  @Input() cardItemSix:     string = ""
  @Input() cardItemSeven:   string = ""


  @Input() twoCardPrice:    string = ""
  @Input() twoCardPetite:   string = ""
  @Input() twoCardItemOne:  string = ""
  @Input() twoCardItemThree:string = ""

  @Input() threeCardPrice:  string = ""
  @Input() threeCardPetite: string = ""
  @Input() threeCardItemOne: string = ""
  @Input() threeCardItemThree: string = ""

  @Input() cardItemEight:string = ""
  @Input() cardItemNine:string = ""
  @Input() cardItemTen:string = ""




  
  constructor() { }

 
}
