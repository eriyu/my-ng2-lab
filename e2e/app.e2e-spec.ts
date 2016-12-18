import { MyNg2LabPage } from './app.po';

describe('my-ng2-lab App', function() {
  let page: MyNg2LabPage;

  beforeEach(() => {
    page = new MyNg2LabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
