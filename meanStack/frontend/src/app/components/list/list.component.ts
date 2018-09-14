import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Issue } from '../../issue.model';
import { IssueService } from '../../issue.service';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];
  count : number[] = [];
  currentPage : number;

  constructor(private issueService: IssueService, private router: Router, private snackBar: MatSnackBar, private location: Location) { }
  ngOnInit() {
    this.fetchIssues();
    this.getPage(1);
  }
  fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      // this.issues = data;
      console.log('Data requested ... ');
      for (let i=1;i<=Math.ceil(data.length/10);i++){
        this.count.push(i);
      }
    });
  }
  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }
  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.snackBar.open('Issue deleted successfully', 'OK', {
        duration: 3000,
      });
      this.getPage(1);
    });
  }
  getPage(page){
    this.issueService.getIssueByPage(page).subscribe((data: Issue[]) => {
      this.issues = data;
      //this.location.go("/page/"+page);
      this.currentPage = page;
    });
  }
}