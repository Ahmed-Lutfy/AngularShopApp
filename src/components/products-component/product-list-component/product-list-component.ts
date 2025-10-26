import { Component } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent {
  // image1:string="https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg";
  // image2:string="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg";
  // image3:string="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg";
  // image4:string="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg";
  // image5:string="https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg";
  // image6:string="https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg";
buttonClicked(){
  console.log("Hello");
}

products:IProduct[]=[
  {title:"Card title", description:"Some quick example text to build on the card title and make up the bulk of the card’s content."
    ,image:"https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg"},
  {title:"Card title", description:"Some quick example text to build on the card title and make up the bulk of the card’s content."
    ,image:"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg"},
  {title:"Card title", description:"Some quick example text to build on the card title and make up the bulk of the card’s content."
    ,image:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"},
  {title:"Card title", description:"Some quick example text to build on the card title and make up the bulk of the card’s content."
    ,image:"https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg"},
  {title:"Card title", description:"Some quick example text to build on the card title and make up the bulk of the card’s content."
    ,image:"https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg"},
  {title:"Card title", description:"Some quick example text to build on the card title and make up the bulk of the card’s content."
    ,image:"https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg"}
];

}
