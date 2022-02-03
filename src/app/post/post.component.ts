import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Users } from '../users';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private httpservice: HttpService,private route: ActivatedRoute,) { }

  post: Users | undefined;
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.httpservice.getpost(id).subscribe(posts => this.post = posts)
  }
  
}
