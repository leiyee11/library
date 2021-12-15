export class BookModel {
  id: string;
  title:  string;
  genre: string;
  description: string;
  author: string;
  publisher:  string;
  image_url: string;
  pdf_url: string;
  pages: string;
}

// export interface IProduct {
//   _id?: string;
//   name: string;
//   brand: string;
// }

// export class Product implements IProduct {
//   constructor(
//     public name: string,
//     public brand: string,
//     public _id?: string
//   ) {
//     this._id = _id ? _id : null;
//     this.name = name;
//     this.brand = brand;
//   }
// }