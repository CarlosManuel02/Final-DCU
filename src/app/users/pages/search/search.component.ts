import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  userId: string = '';
  user: any = {};
  userFound: boolean = false;
  users: any[] = [
    {
      id: '1',
      name: 'Juan',
      lastName: 'Perez',
      email: "juan@example.com",
      phone: "123-456-7890",
      address: "Calle 123, Ciudad Ejemplo",
    },
    {
      id: '2',
      name: 'María',
      lastName: 'Gómez',
      email: "maria@example.com",
      phone: "987-654-3210",
      address: "Avenida 456, Otra Ciudad",
    },
    {
      id: '3',
      name: 'Carlos',
      lastName: 'Rodríguez',
      email: "carlos@example.com",
      phone: "555-555-5555",
      address: "Carrera 789, Ciudad Principal",
    },
    // Agrega más usuarios aquí
  ];


  searchUser() {
    const foundUser = this.users.find(user => user.id === this.userId);
    if (foundUser) {
      this.user = foundUser;
      this.userFound = true;
    } else {
      this.userFound = false;
    }
  }


  clear() {
    this.userId = '';
    this.user = {};
    this.userFound = false;
  }

  selectUser(id: string) {
    this.userId = id;
    this.searchUser();
  }
}
