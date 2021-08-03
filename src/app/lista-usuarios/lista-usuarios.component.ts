import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usersList: User[];
  collection = { count: 10, data: [] };

  constructor(public usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.populateUsers();
  }

    //metodo para preencher os usuarios com dados mocados
  populateUsers() {
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i,
        name: 'teste' + i,
        username: 'teste' + i,
        password: 1 + i + i + i ,
        admin: 'sim',
      });
    }

    this.usersList = this.collection.data;
    console.log(this.usersList)

  }

  editContatos(usuarios: User) {
    console.log('edit esta funcionando', usuarios);
    this.usuariosService.getUserList(usuarios);
    this.router.navigate(['cadastro-usuarios']);
  }

  deleteUsers(usuarios: User) {
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Deseja mesmo deletar?',
      icon:'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletado com sucesso',
        );
      }
  });
 }

}
