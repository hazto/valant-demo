import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging/logging.service';
import { ApiService } from './api/api.service';

@Component({
  selector: 'valant-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public title = 'Valant demo';
  public data: string[];
  public mazeNames: string[];
  public activeMaze: any;
  public loadMessage: string;

  constructor(private logger: LoggingService, private apiService: ApiService) {}

  ngOnInit() {
    this.logger.log('Welcome to the AppComponent');
    this.getMapList();
  }

  select(maze: string) {
    console.log('sleected', maze);
    this.getMaze(maze);
  }

  uploadFile(files) {
    console.log('event', files[0])

    this.apiService.uploadMaze(files[0]).subscribe({
      next: response => console.log('file response', response),
      error: error => this.logger.error('uploadFile error', error)
    });
  }

  private getMaze(maze: string) {
    const result = this.apiService.loadMaze(maze); // TODO, use id's
    this.activeMaze = result;
  }

  private getMapList(): void {
    this.apiService.getMovesList().subscribe({
      next: (response: string[]) => this.mazeNames = response,
      error: (error) => this.logger.error('Error getting stuff... ', error)
    });
  }

  
}
