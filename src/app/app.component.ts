import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'new-hello-world';
  imgUrl ="";
  url ="";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz.";
    this.imgUrl = "../assets/BL_logo_square_jpg.jpg";
    this.url = "https://www.bridgelabz.com";
    this.userName = "Divya";
  }

  onClick($event: MouseEvent) {
    console.log("Save Button is clicked", $event);
    window.open(this.url,"_blank");
  }

  onInput($event: any){
    console.log("Change Event Occured!",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z//s]{2,}$');
    if(nameRegex.test(this.userName)) {
      this.nameError="";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}
