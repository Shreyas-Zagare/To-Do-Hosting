import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem: string;
  todo:Todo[] 
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
    this.todo = [];
    }
    else{
      this.todo = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }

  deleteTodo(todos:Todo){
    console.log(todos);
    const index = this.todo.indexOf(todos);
    this.todo.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todo));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todo.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todo));
  }
  toggleTodo(todos:Todo){
    const index = this.todo.indexOf(todos);
    this.todo[index].active = !this.todo[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todo));
  }
}
