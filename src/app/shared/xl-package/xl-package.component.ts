import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xl-package',
  templateUrl: './xl-package.component.html',
  styleUrls: ['./xl-package.component.css']
})
export class XlPackageComponent {
  @Input() color:           string = ""  
  @Input() bars:            string = ""  
  @Input() image:           string = ""
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
  @Input()  twoCardItemTwo:  string = ""
  @Input() twoCardItemThree:string = ""

  @Input() threeCardPrice:  string = ""
  @Input() threeCardPetite: string = ""
  @Input() threeCardItemOne: string = ""
  @Input() threeCardItemTwo:string = ""
  @Input() threeCardItemThree: string = ""
  @Input() threeCardItemFour:string = ""
  @Input() threeCardItemFive:string = ""
  @Input() threeCardItemSix:string = ""
  @Input() threeCardItemSeven:string = ""
  @Input() threeCardItemEight:string = ""



  @Input() cardItemEight:string = ""
  @Input() cardItemNine:string = ""
  @Input() cardItemTen:string = ""


  @Input() twoCardItemFour:string = ""

  @Input() twoCardItemFive:string = ""
  @Input() twoCardItemSix:string = ""
  @Input() twoCardItemSeven:string = ""
  @Input() twoCardItemEight:string = ""




  constructor() { }


}
