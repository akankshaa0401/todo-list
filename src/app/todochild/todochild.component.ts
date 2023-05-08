import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
// import { customeValidator } from '../custome.validator';
import { Validators } from '@angular/forms';
import { priorities } from '../const.variables';
import { status } from '../const.variables';
import { Router } from '@angular/router';
import { CreatetaskService } from './createTask.service';
import { UsersService } from '../users/users.service';
@Component({
  selector: 'app-todochild',
  templateUrl: './todochild.component.html',
  styleUrls: ['./todochild.component.css']
})

export class TodochildComponent {
  constructor(private createtask:CreatetaskService,
    private fb: FormBuilder,
    private userService:UsersService,
    private router: Router) { }
  addTaskForm: FormGroup = new FormGroup({})
  priorities = priorities
  status = status
  clickedToAddTask = false

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      taskName: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      priority: new FormControl('',),
      status: new FormControl(''),
      assignedTo: new FormControl('',),
      dueDate: new FormControl('',),
    });
  }
  
  // onclick(){
  //   this.router.navigate(["users"])
  // }
  onSubmit(){
    console.log(this.addTaskForm);
    this.createtask.createTask(this.addTaskForm.value.taskName,this.addTaskForm.value.priority)
    .subscribe(res=>{
      // this.cookieService.get('set-cookie')
      // this.cookieService.set('connect.sid',email); 
      alert('You successfully created Task');
      this.router.navigate(["todolist"])
    },err=>{
      alert("Something went wrong while creating task")
    })
  }
}
