import { uuid } from '../utils';

export interface IElementStyle {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  zIndex?: number;
}

export interface IElement {
  // 保证 Element 的唯一性
  id: string;
  // 名称
  name: string;
  // 物料id
  mId: number;
  // 物料版本
  mVersion: string;
  // 元素样式
  style: IElementStyle;
  // 元素属性
  props: Record<string, any>;
}

export class PageElement implements IElement {
  public style: IElementStyle = {};
  public props: Record<string, any> = {};
  public id = uuid();
  public name = 'New Element';
  public mId;
  public mVersion;

  public static create(e?: IElement) {
    const element = new PageElement();
    if (e) {
      element.id = e.id;
      element.name = e.name;
      element.mId = e.mId;
      element.mVersion = e.mVersion;
      element.style = e.style;
      element.props = e.props;
    }

    return element;
  }

  public getJson(): IElement {
    return {
      id: this.id,
      name: this.name,
      mId: this.mId,
      mVersion: this.mVersion,
      style: this.style,
      props: this.props
    };
  }
}
