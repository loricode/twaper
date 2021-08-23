import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-giga-packages',
  templateUrl: './giga-packages.component.html',
  styleUrls: ['./giga-packages.component.css']
})
export class GigaPackagesComponent  {
  @Input() title:           string = ""   
  @Input() titleParteOne:   string = ""
  @Input() titleParteTwo:   string = ""

  @Input() oneCardPrice:    string = ""   
  @Input() cardMonth:       string = ""
  @Input() oneCardGiga:    string = ""

  @Input() oneCardItemOne:  string = ""
  @Input() cardItemTwo:     string = "" 
  @Input() oneCardItemThree:string = ""

  @Input() cardItemFour:    string = ""

  @Input() cardItemFive:    string = ""
  @Input() cardItemSix:     string = ""
  @Input() cardItemSeven:   string = ""

  @Input() twoCardPrice:    string = ""   
  @Input() twoCardGiga:    string = ""
  @Input() twoCardItemOne:  string = ""
  @Input() twoCardItemThree:string = ""

  @Input() threeCardPrice:    string = ""   
  @Input() threeCardGiga:    string = ""
  @Input() threeCardItemOne:  string = ""
  @Input() threeCardItemThree:string = ""

  @Input() cardItemEight:string = ""
  constructor() { }



}
