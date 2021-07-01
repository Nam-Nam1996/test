import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // @ts-ignore
  @ViewChild('f') f:NgForm
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  // exit() {
  //   this.router.navigate([''])
  // }
  onSubmit(){
    console.log(this.f.valid)
  }

}
