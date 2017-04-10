import { FirstprojectPage } from './app.po';

describe('firstproject App', () => {
  let page: FirstprojectPage;

  beforeEach(() => {
    page = new FirstprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
