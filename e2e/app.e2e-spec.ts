import { YJYLWebPage } from './app.po';

describe('yjylweb App', () => {
  let page: YJYLWebPage;

  beforeEach(() => {
    page = new YJYLWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
