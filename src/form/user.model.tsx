export class User {
  name: string;
  email: string;
  phone: string;
  website: string;
  age: number;

  constructor(
    name: string = '',
    email: string = '',
    website: string = '',
    phone: string = '',
    age: number = 0
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.age = age;
  }
}
