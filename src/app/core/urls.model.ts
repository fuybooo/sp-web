/**
 * 请求URL
 */
export const urls = {
  login: '/login', // 登录
  vcode: '/vcode', // 手机验证码
  users: '/userinfos', // 用户列表
  orgtree: '/orgtree', // 部门树
  orgs: '/orgs', // 机构
  depts: '/depts', // 部门
  deptusers: '/deptusers', // 部门用户
  banktype: '/banktype', // 银行类别
  costtypes: '/costtypes', // 费用类别
  // costprojs: '/costprojs', // 费用项目
  reimamounts: '/reimamounts', // 报销额度
  menus: '/menus', // 特殊菜单
  dimeninfos: '/dimeninfos', // 维度表（支付档案中的支付方式，税率，职级，城市）
  dimentypes: '/dimentypes', // 自定义档案列表
  dictionarys: '/sysdictionarys', // 字典
  roles: '/roles', // 获取角色列表
  currencydics: '/currencydics', // 币种字典
  currencyarchives: '/currencyarchives', // 币种
  banks: '/sysbankaccounts', // 银行账户
  supplierinfos: '/syssupplierinfos', // 供应商
  citytypes: '/citytypes', // 城市类别
  travelarcs: '/travelarcs', // 商旅
  billtemplateitems: '/billtemplateitems', // 单据模版字段列表
  syscostprojs: '/syscostprojs', // 单据模版字段列表
  citys: '/citys', // 单据模版字段列表
  privileges: '/privileges', // 查询权限表格
  paramcontrols: '/paramcontrols', // 参数信息
  roleusers: '/roleusers', // 角色下用户信息
  templatebills: '/templatebills', // 单据模版列表信息
  billtemplates: '/billtemplates', // 单据模版详情信息
  templatebillitems: '/templatebillitems', // 单据模版字段列表信息
  cache: '/cache', // 字典缓存
  paramcontrolitems: '/paramcontrolitems', // 参数保存
  logprivileges: '/logprivileges', // 登录权限
  fillprivileges: '/fillprivileges', // 填单权限
};

export interface Dictionary {
  BILL_STATUS?: any[];
  BILL_TYPE?: any[];
  MSG_NOTICE_STATUS?: any[];
  PAYMENT_METHOD?: any[];
  TRAFFIC_MODE?: any[];
  TRAFFIC_MODE_CAR?: any[];
  TRAFFIC_MODE_HSR?: any[];
  TRAFFIC_MODE_BTR?: any[];
  TRAFFIC_MODE_TRAIN?: any[];
  TRAFFIC_MODE_PLANE?: any[];
  TRAFFIC_MODE_SHIP?: any[];
  DEPT_POST?: any[];
  DEPT_PROPERTY?: any[];
  BANK_TYPE?: any[];
  FIELD_TYPE?: any[];
  USER_TYPE?: any[];
  IDCARD_TYPE?: any[];
  AU_MENU_FLAG?: any[];
  BILL_TEMP_SHOW_POS?: any[];
  NATIONALITY?: any[];
  PROJECT_POST?: any[];
}
