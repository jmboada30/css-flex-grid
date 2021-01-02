import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-netflix',
  templateUrl: './login-netflix.component.html',
  styleUrls: ['./login-netflix.component.scss']
})
export class LoginNetflixComponent implements OnInit {
  mostrar:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onMostrar() {
    const mostrarPasswordBtn = document.querySelector('form .campo span');
    mostrarPasswordBtn.addEventListener('click', e => {
      const passwordInput = document.querySelector('#password') as HTMLInputElement;
      const el = e.target as Element;

      if (el.classList.contains('mostrar')) {
        el.classList.remove('mostrar')
        el.textContent = 'Ocultar'
        passwordInput.type = 'text'
      }else {
        el.classList.add('mostrar')
        el.textContent = 'Mostrar'
        passwordInput.type = 'password'
      }
    })
  }

}
