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
  @Input() form: FormGroup; // form表单主体，必传
  @Input() formType = ''; // form表单类型，默认为空，表示增改，可选为view，表示查看
  @Input() isGlobalEvent; // 是否需要全局事件去发射form表单的变化 默认为false // todo 长时间无用的话将会删掉
  @Output() formChange = new EventEmitter(); // 表单变化事件
  // formDimension = 2; // 表单的维度
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
        {value: col.defaultValue, disabled: col.disabled || this.formType === 'disable'},
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
  $(name) {
    return this.$control(name).value;
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
  fileChange(file, col) {
    this.$control(col.field).setValue(file.files);
    this.form.markAsDirty();
    this.changeControl();
  }
  getViewValue(col) {
    let defaultValueField = 'value';
    let defaultLabelField = 'label';
    if (col.type === 'select') {
      defaultValueField = 'id';
      defaultLabelField = 'name';
    }
    return UtilService.getPropValue(col.list, this.$(col.field), col.nzValueField || defaultValueField, col.nzLabelField || defaultLabelField);
  }

}
