import { IPage, Page } from './page';

export interface IProject {
  id: number;
  // 项目名称
  name: string;
  // 描述
  description: string;
  // 页面
  pages: IPage[];
}

export class Project implements IProject {
  public id: number;
  public name = 'New Project';
  public description = 'New Project Description';
  private _pages: Page[] = [];
  public get pages() {
    return this._pages.map((page) => page.getJson());
  }

  public static create(p?: IProject) {
    const project = new Project();
    if (p) {
      project.id = p.id;
      project.name = p.name;
      project.description = p.description;
      project._pages = p.pages.map((page) => Page.create(page));
    } else {
      project.addPage(Page.create());
    }

    return project;
  }

  public addPage(page: Page) {
    this._pages.push(page);
  }

  public removePage(page: Page) {
    const index = this._pages.indexOf(page);
    if (index >= 0) {
      this._pages.splice(index, 1);
    }
  }

  public insertPage(index: number, page: Page) {
    this._pages.splice(index, 0, page);
  }

  public getPageByIndex(index: number) {
    return this._pages[index];
  }

  public getJson(): IProject {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      pages: this.pages
    };
  }
}
