import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-micro-packages',
  templateUrl: './micro-packages.component.html',
  styleUrls: ['./micro-packages.component.css']
})
export class MicroPackagesComponent {
  @Input() title:           string = ""   
  @Input() titleParteOne:   string = ""
  @Input() titleParteTwo:   string = ""

  @Input() oneCardPrice:    string = ""   
  @Input() cardMonth:       string = ""
  @Input() oneCardMicro:    string = ""

  @Input() oneCardItemOne:  string = ""
  @Input() cardItemTwo:     string = "" 
  @Input() oneCardItemThree:string = ""

  @Input() cardItemFour:    string = ""

  @Input() cardItemFive:    string = ""
  @Input() cardItemSix:     string = ""
  @Input() cardItemSeven:   string = ""

  @Input() twoCardPrice:    string = ""   
  @Input() twoCardMicro:    string = ""
  @Input() twoCardItemOne:  string = ""
  @Input() twoCardItemThree:string = ""

  @Input() threeCardPrice:    string = ""   
  @Input() threeCardMicro:    string = ""
  @Input() threeCardItemOne:  string = ""
  @Input() threeCardItemThree:string = ""

  @Input() cardItemEight:string = ""
  
  constructor() { }


}
