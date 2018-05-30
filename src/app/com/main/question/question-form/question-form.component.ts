import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormConfigItem} from '../../../../shared/component/form/form.model';
import {UtilService} from '../../../../core/util.service';

const list1 = [
  {
    id: '1',
    name: '融资需求类'
  },
  {
    id: '2',
    name: '土地供应类'
  },
  {
    id: '3',
    name: '人力人才类'
  },
  {
    id: '3',
    name: '向上申请类'
  },
  {
    id: '3',
    name: '公共服务类'
  },
  {
    id: '3',
    name: '公用设施类'
  },
  {
    id: '3',
    name: '行政审批类'
  },
  {
    id: '3',
    name: '配套建设类'
  },
  {
    id: '3',
    name: '安全生产类'
  },
  {
    id: '3',
    name: '环境保护类'
  },
  {
    id: '3',
    name: '政策落实类'
  },
  {
    id: '3',
    name: '企业权益类'
  },
  {
    id: '3',
    name: '其他服务类'
  },
];

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.less']
})
export class QuestionFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  formId = UtilService.guid();
  formConfig: FormConfigItem[][] = [
    [
      {
        label: '填报人姓名',
        field: 'applicant_name',
      },
    ],
    [
      {
        label: '填报人职务',
        field: 'applicant_position',
      },
    ],
    [
      {
        label: '填报人手机',
        field: 'applicant_phone',
        type: 'number'
      },
    ],
    [
      {
        label: '固定电话',
        field: 'fixed_phone',
      },
    ],
    [
      {
        label: '问题性质',
        field: 'question_type_id',
        type: 'select',
        list: list1
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
        field: 'file_path',
        type: 'file'
      },
    ]
  ];

  constructor() {
  }

  ngOnInit() {
  }
  handleOk() {
    console.log(this.form.value);
  }
}
