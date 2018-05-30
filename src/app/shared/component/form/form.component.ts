import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilService} from '../../../core/util.service';
import {CoreService} from '../../../core/core.service';
import {FormConfigItem} from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() formId; // 表单唯一id，必传切唯一
  @Input() nzGutter = 30; // 横向间距，默认为30，在一行显示两列时起作用
  @Input() formConfig: FormConfigItem[][]; // 主要配置项，必传
  @Input() form: FormGroup;
  @Input() isGlobalEvent;
  @Output() formChange = new EventEmitter();
  subscript;
  constructor(
    private fb: FormBuilder,
    private coreService: CoreService
  ) { }

  ngOnInit() {
    /**
     * 只有在点击保存时才发射form表单
     */
    if (this.isGlobalEvent) {
      this.subscript = this.coreService.globalFormEvent.subscribe((event) => {
        if (event === this.formId) {
          this.formChange.emit(this.form);
        }
      });
    }
    // 根据formConfig 生成form
    let group: any = {};
    this.formConfig.forEach((row: any[]) => row.forEach((col: any) => {
      group[col.field] = [
        col.defaultValue,
        [...(col.validators ? col.validators.map(validator => {
          switch (validator.type) {
            case 'required':
              return Validators.required;
            case 'maxlength':
              return Validators.maxLength(validator.value);
            case 'minlength':
              return Validators.minLength(validator.value);
            case 'mistake':
              return UtilService.getSpecialCharacterValidator(validator.value, validator.notAllow);
          }
        }) : [])]
      ];
    }));
    this.form = this.fb.group(group);
  }
  ngOnDestroy() {
    if (this.subscript) {
      this.subscript.unsubscribe();
    }
  }
  changeControl() {
    this.formChange.emit(this.form);
  }
  $control(name) {
    return this.form.controls[name];
  }
  isRequired(col) {
    return col.validators ? col.validators.some(v => v.type === 'required') : false;
  }
  getValidatorText(v) {
    switch (v.type) {
      case 'required':
        return '必填项不能为空';
      case 'maxlength':
        return '最多输入' + v.value + '位';
      case 'minlength':
        return '最少输入' + v.value + '位';
      case 'mistake':
        return '输入不合规范';
    }
  }

}
