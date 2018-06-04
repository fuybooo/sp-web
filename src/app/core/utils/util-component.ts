import {FormConfigItem} from '../../shared/component/form/form.model';
import {NzTreeNode} from 'ng-zorro-antd';

export function findFormItem(formConfig, field): FormConfigItem {
  for (const row of formConfig) {
    for (const col of row) {
      if (col.field === field) {
        return col;
      }
    }
  }
}

/**
 * 获取默认的模态框底部按钮组
 * @param onClick ok按钮确认事件，必须传入
 * @param onCancel cancel按钮确认事件，必须传入
 * @param {boolean} needDisabled 是否需要禁用逻辑
 * @param {string} formKey 禁用逻辑调用的form表单的key值
 * @param {(_modal) => any} disabled 默认的禁用逻辑，验证表单是否合法，是否干净
 * @param {(modal) => any} onCancel 默认的取消事件
 * @returns {({label: string} | {label: string; disabled: (_modal) => any; onClick: any} | {label: string; onClick: any})[]}
 */
export function getModalFooter(onClick, onCancel, needDisabled = false, formKey = 'form', disabled = (_modal) => needDisabled && (_modal[formKey].invalid || _modal[formKey].pristine)) {
  return [
    {
      label: '取消',
      onClick: onCancel
    },
    needDisabled ?
      {
        label: '确定',
        type: 'primary',
        disabled,
        onClick
      } : {
        label: '确定',
        type: 'primary',
        onClick
      }
  ];
}

/**
 * 将数组转换为树
 * @param array
 * @returns {any[]}
 */
export function convertListToTree(array) {
  let list = [];
  for (let item of array) {
    if (isRoot(item, array)) {
      let children = getChildren(item, array);
      if (children.length > 0) {
        item.children = children;
      }
      list.push(new NzTreeNode(item));
    }
  }
  return list;
}

/**
 * 判断节点是否为根
 * @param item
 * @param array
 * @returns {boolean}
 */
export function isRoot(item, array): boolean {
  let parentString = getParentIdStr(item);
  if (parentString && item[parentString]) {
    for (let a of array) {
      if (a.id === item[parentString]) {
        return false;
      }
    }
  }
  return true;
}

/**
 * 获取所有的子元素
 * @param item
 * @param array
 * @returns {any[]}
 */
export function getChildren(item, array) {
  let children = [];
  for (let data of array) {
    let parentId = getParentIdStr(data);
    if (item.id === data[parentId]) {
      let _children = getChildren(data, array);
      if (_children.length > 0) {
        data.children = _children;
      }
      children.push(data);
    }
  }
  return children;
}

/**
 * 获取父id的key
 * @param data
 * @returns {string}
 */
export function getParentIdStr(data): string {
  let parentIds = ['pid', 'parentid', 'parentId', 'pId', 'parent_id'];
  for (let item of parentIds) {
    if (item in data) {
      return item;
    }
  }
}

/**
 * 根据扁平树list转换为层次树数据
 * @param list
 * @param {string} titleKey
 * @param {string} key
 * @returns {NzTreeNode[]}
 */
export function getNodesByList(list, titleKey = 'name', key = 'id') {
  return convertListToTree((list || []).map(item => {
    item.title = item[titleKey];
    item.key = item[key];
    return item;
  }));
}
/**
 * 获取link url
 * @param col
 * @param data
 * @returns {string}
 */
export function getHref(col, data, event) {
  return col.link + '/' + event + '/' + data.id;
}
