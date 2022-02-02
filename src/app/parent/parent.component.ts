import { Component, OnInit } from '@angular/core';
import { Dummy } from '../interfaces/dummy';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  albums: Dummy[]=[]
  constructor(private service: FetchDataService) { }
  sort_by_id=0;
  sort_by_name=0;

  ngOnInit(): void {
    this.getAlbums()
  }
  getAlbums(): void{
    this.service.getData().subscribe(albumlist => this.albums = albumlist)
  }
  check_checked(obj: {dosort: boolean, col: string}): void{
    if (obj.col === "id" && obj.dosort==true)
      this.albums.sort((a,b) => (a.id < b.id) ? 1 : -1)
    else if (obj.col === "title" && obj.dosort==true)
    {

      this.albums.sort((a,b) => {
      let a_title=a.title.toUpperCase();
      let b_title=b.title.toUpperCase();

      if (a_title>b_title)
        return 1;
      else  
        return -1;
      })
    }
  }
}
