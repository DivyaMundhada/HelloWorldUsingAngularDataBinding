import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String = 'new-hello-world';
  imgUrl ="";
  url ="";
  userName: String = "";

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
}
