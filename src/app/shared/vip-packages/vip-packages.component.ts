import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-packages',
  templateUrl: './vip-packages.component.html',
  styleUrls: ['./vip-packages.component.css']
})
export class VipPackagesComponent {

  @Input("pt") pt:string = ""
  
  @Input() title:           string = ""   
  @Input() titleParteOne:   string = ""
  @Input() titleParteTwo:   string = ""

  @Input() oneCardPrice:    string = ""   
  @Input() cardMonth:       string = ""
  @Input() oneCardVip:    string = ""

  @Input() oneCardItemOne:  string = ""
  @Input() cardItemTwo:     string = "" 
  @Input() oneCardItemThree:string = ""

  @Input() cardItemFour:    string = ""

  @Input() cardItemFive:    string = ""
  @Input() cardItemSix:     string = ""
  @Input() cardItemSeven:   string = ""

  @Input() twoCardPrice:    string = ""   
  @Input() twoCardVip:    string = ""
  @Input() twoCardItemOne:  string = ""
  @Input() twoCardItemThree:string = ""

  @Input() threeCardPrice:    string = ""   
  @Input() threeCardVip:    string = ""
  @Input() threeCardItemOne:  string = ""
  @Input() threeCardItemThree:string = ""

  @Input() cardItemEight:string = ""

  constructor() { }

  

}
