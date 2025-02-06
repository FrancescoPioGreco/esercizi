import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchMavenApiService {

  constructor(private httpClient: HttpClient) { }

  urlToFetch:string = 'https://search.maven.org/solrsearch/select?q=g:';

  getApiResponse(
    group_id:string,
    artifact:string
  ): Observable<Documents[]>{

    return this.httpClient.get<Root>(this.urlToFetch + group_id + '+AND+a:' + artifact + '&core=gav&rows=20&wt=json').pipe(
      map(
        response=>
          response.response.docs
      )
    )
  }
}



export interface Root {
  responseHeader: ResponseHeader
  response: Response
}

export interface ResponseHeader {
  status: number
  QTime: number
  params: Params
}

export interface Params {
  q: string
  core: string
  indent: string
  fl: string
  start: string
  sort: string
  rows: string
  wt: string
  version: string
}

export interface Response {
  numFound: number
  start: number
  docs: Documents[]
}

export interface Documents {
  id: string
  g: string
  a: string
  v: string
  p: string
  timestamp: number
  ec: string[]
  tags: string[]
}
