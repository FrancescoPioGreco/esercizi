import { Component } from '@angular/core';
import { Documents, FetchMavenApiService } from '../../servizi/fetch-maven-api.service';

@Component({
  selector: 'app-maven-api-rest',
  standalone: false,
  
  templateUrl: './maven-api-rest.component.html',
  styleUrl: './maven-api-rest.component.css'
})
export class MavenApiRestComponent {

  constructor(private fetchApi:FetchMavenApiService){ }

  rispostaDocs: Documents[] = [];

  group_id:string = '';
  artifact :string = '';


  onClickHandler():void{
    this.fetchMavenApi();
  }


  fetchMavenApi():void{
    this.fetchApi.getApiResponse(this.group_id,this.artifact).subscribe(
      (data)=>{
        this.rispostaDocs = data;
      }
    )
  }


}
