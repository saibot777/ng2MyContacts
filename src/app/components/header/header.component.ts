import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public fullPath: string;
  public myLogo: string = "logo.png";

  getMyPictures(){
  return this.fullPath = "./../../assets/images/" + this.myLogo;
  }


}
