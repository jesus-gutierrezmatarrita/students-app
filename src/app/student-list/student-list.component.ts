import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  /**
   * An array which receives any type of object
   */
  students:any = [];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.getStudents();
  }

  /**
   * Gets all the students from the service
   */
  getStudents() {
    this.students = [];

    this.rest.getStudent().subscribe((data: {}) => {
      console.log(data);

      this.students = data;
    });
  }

  /**
   * Adds a student
   */
  add() {

  }

  /**
   * Deletes a student
   */
  delete(id:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.rest.delete(id).subscribe((data) => {
          console.log(data);

          this.ngOnInit();
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'The student has been deleted',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

}
