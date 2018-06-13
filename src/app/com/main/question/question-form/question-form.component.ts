import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormConfigItem} from '../../../../shared/component/form/form.model';
import {UtilService} from '../../../../core/utils/util.service';
import {HttpClient} from '@angular/common/http';
import {HttpRes} from '../../../../shared/shared.model';
import {guid} from '../../../../core/utils/util-fns';
import {findFormItem} from '../../../../core/utils/util-component';
import {getParams, getWholeParams} from '../../../../core/utils/util-project';

declare let OSS: any;

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.less']
})
export class QuestionFormComponent implements OnInit {
  token = 'eec6151fced666926f2c9536cdcf486f';
  form: FormGroup = new FormGroup({});
  formId = guid();
  formConfig: FormConfigItem[][] = [
    [
      {
        label: '填报人姓名',
        field: 'applicantname',
      },
    ],
    [
      {
        label: '填报人职务',
        field: 'applicantposition',
      },
    ],
    [
      {
        label: '填报人手机',
        field: 'applicantphone',
        type: 'number'
      },
    ],
    [
      {
        label: '固定电话',
        field: 'fixedphone',
      },
    ],
    [
      {
        label: '问题性质',
        field: 'questiontypeid',
        type: 'select',
        nzLabelField: 'dicname',
        nzValueField: 'code'
      },
    ],
    [
      {
        label: '负责人已知晓',
        field: 'is_know',
        type: 'switch'
      },
    ],
    [
      {
        label: '问题内容',
        field: 'question',
        type: 'textarea'
      },
    ],
    [
      {
        label: '问题附件',
        field: 'files',
        type: 'file'
      },
    ]
  ];

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) {
  }

  ngOnInit() {
    UtilService.getDic(() => {
      findFormItem(this.formConfig, 'questiontypeid').list = UtilService.dictionaries.ISSUE_TYPE;
    });
  }
  handleOk() {
    console.log(this.form.value);
    // 上传文件
    if (this.form.value.files && this.form.value.files.length) {
      // 获取STS临时授权信息
      this.getbasic();
    }
  }
  getbasic() {
    this.http.post('http://10.18.15.133:8060/uk-bsc/v1/requestoss/', {
      'req_type': '10',
      'method': 'get',
      'bodyparams': {},
      'token': this.token,
      'data': JSON.stringify({})
    }).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        this.getSts(res.data);
        // BucktName,Floder,OssEndpoint,OssDomain
      }
    });
  }
  getSts(params) {
    this.http.post('http://10.18.15.133:8060/uk-bsc/v1/requesttoken/', {
      'req_type': '10',
      'method': 'get',
      'bodyparams': {},
      'token': this.token,
      'data': JSON.stringify({})
    }).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        // 提供web服务端签名
        const client = new OSS.Wrapper({
          accessKeyId: res.data.AccessKeyId,
          accessKeySecret: res.data.AccessKeySecret,
          stsToken: res.data.SecurityToken,
          endpoint: params.OssEndpoint,
          bucket: params.BucktName
        });
        client.multipartUpload(params.Floder + this.form.value.files[0].name, this.form.value.files[0]).then(response => {
          console.log('文件上传之后的返回值', response);
        }).catch(function (err) {
          console.log(err);
        });
      }
    });
  }
  getSign(params, baseParams) {
    this.http.post('http://10.18.15.133:8060/uk-bsc/v1/postobjectpolicy/', {
      'req_type': '10',
      'method': 'get',
      'bodyparams': {},
      'token': this.token,
      'data': JSON.stringify({
        accessKeyId: params.AccessKeyId,
        secretAccessKey: params.AccessKeySecret,
        securityToken: params.SecurityToken,
        dir: baseParams.Floder,
      })
    }).subscribe((res: HttpRes) => {
      if (res.code === 200) {
        const result = res.data;
        const client = new OSS.Wrapper({
          accessKeyId: result.accessid,
          accessKeySecret: result.AccessKeySecret,
          stsToken: result.SecurityToken,
          endpoint: baseParams.OssEndpoint,
          bucket: baseParams.BucktName
        });
        client.multipartUpload(baseParams.Floder + 'file-name', this.form.value.files).then(response => {
          console.log('文件上传之后的返回值', response);
        });
      }
    });
  }
}
