import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild("table", {read: ElementRef}) table: ElementRef;
  @ViewChild("searchValue", {read: ElementRef}) searchValue: ElementRef;

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];
  count : number[] = [];
  currentPage : number;
  toBeDeleted : any;
  displayNav : boolean = true;
  displayError: boolean = false;

  constructor(private issueService: IssueService, private router: Router, private snackBar: MatSnackBar, private location: Location) { }
  ngOnInit() {
    console.log(this.table);
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
  deleteIssue() {
    var id = this.toBeDeleted;
    this.issueService.deleteIssue(id).subscribe(() => {
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

  search(query){
    if(query.length < 3){
      this.displayError = true;
    } else {
      this.displayError = false;
      this.displayNav = false;
      this.issueService.getSearchResults(query).subscribe((data: Issue[]) => {
        this.issues = data;
      })
    }
  }

  clearSearch(){
    this.searchValue.nativeElement.value = "";
    this.getPage(1);
    this.displayNav = true;
  }

}