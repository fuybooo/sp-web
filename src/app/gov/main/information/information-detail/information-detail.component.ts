import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {urls} from '../../../../core/urls.model';
import {UtilService} from '../../../../core/util.service';
import {AJAXTYPE, HttpRes} from '../../../../shared/shared.model';
import {infoTypeList} from '../../../../app.model';
import {NzMessageService} from 'ng-zorro-antd';
declare let wangEditor: any;
@Component({
  selector: 'app-information-detail',
  templateUrl: './information-detail.component.html',
  styleUrls: ['./information-detail.component.less']
})
export class InformationDetailComponent implements OnInit {
  editor;
  url = urls.infos;
  id;
  op;
  data: any = {
    infotype: '',
    title: ''
  };
  typeList = infoTypeList;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilService: UtilService,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.op = this.route.snapshot.params.op;
    this.editor = new wangEditor('#js-info-content-area');
    this.editor.create();
    if (this.op !== 'add' && this.id !== '0') {
      this.utilService.get(this.url, {id: this.id}).subscribe((res: HttpRes) => {
        if (res.code === 200) {
          this.data = res.data;
          this.editor.txt.html(this.data.content);
        }
      });
    }
  }
  submit() {
    console.log(this.editor.txt.html());
    this.utilService.ajax(this.url, this.data, this.op === 'add' ? AJAXTYPE.POST : AJAXTYPE.PUT).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        this.message.success('保存成功');
        this.router.navigateByUrl('/gov/main/information');
      }
    });
  }
}
