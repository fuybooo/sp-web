import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UtilService} from '../../../core/utils/util.service';
import {urls} from '../../../core/urls.model';
import {HttpRes} from '../../../shared/shared.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  data;
  constructor(
    private router: Router,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    this.getSummary();
  }
  getSummary() {
    this.utilService.get(urls.companyHome).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        this.data = {
          total: res.data.total,
          replies: res.data.replies
        };
      }
    });
  }
  toQuestion() {
    this.router.navigateByUrl('/com/main/question');
  }
  toAsk() {
    this.router.navigateByUrl('/com/main/question/ask');
  }
}
