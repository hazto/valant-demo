import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValantDemoApiClient } from '../api-client/api-client';
import { Maze, Coordinate } from '../app.model';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: ValantDemoApiClient.Client) {}

  public getMovesList(): Observable<string[]> {
    const response = this.httpClient.list();
    response.subscribe(x => console.log('x?', x), error => console.log('error?', error));
    
    return response;
  }

  public loadMaze(name: string): Observable<Maze> {
    const response = this.httpClient.load(name);
    response.subscribe(x => console.log('x?', x), error => console.log('error?', error));
    
    
    return response;
  }

  public uploadMaze(form: FormData): Observable<any> {
    const response = this.httpClient.upload(form as Maze);
    response.subscribe(r => console.log('upload?', r), error => error('error?', error));

    return response;
  }
}
