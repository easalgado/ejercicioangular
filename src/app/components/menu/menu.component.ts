import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    
    {
      name:'descripcion',
      path:'/descripcion'
  },
  {   name:'lugar-nacimiento',
      path:'/lugar-nacimiento'

  },
  {   name:'metas',
      path:'/metas'

  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
