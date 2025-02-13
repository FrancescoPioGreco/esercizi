import { Component, OnInit } from '@angular/core';
import { Documents, FetchMavenApiService } from '../../servizi/fetch-maven-api.service';

@Component({
  selector: 'app-maven-api-rest',
  standalone: false,
  
  templateUrl: './maven-api-rest.component.html',
  styleUrl: './maven-api-rest.component.css'
})
export class MavenApiRestComponent implements OnInit{
  ngOnInit(): void {
    fetch('http://localhost:4200/api/solrsearch/select?q=guice&rows=20&wt=json').then(console.log).catch(console.log)
  }
  title='maven-api-rest';

  data: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tbaleSize: any = [5, 10, 15, 20]

  constructor(private fetchApi:FetchMavenApiService){ }

  rispostaDocs: Documents[] = [];
  group_id:string = 'com.google.inject';
  artifact :string = 'guice';


  onClickHandler():void{
    this.fetchMavenApi();
  }

  // fetchMavenApi():void{
  //   this.fetchApi.getApiResponse(this.group_id,this.artifact).subscribe(
  //     (data)=>{
  //       this.rispostaDocs = data;
  //     }
  //   )
  // }

  fetchMavenApi():void{
    this.fetchApi.getApiResponse(this.group_id,this.artifact).subscribe(
      (data)=>{
        this.rispostaDocs = data;
      }
    )
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchMavenApi();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchMavenApi();
  }


}
