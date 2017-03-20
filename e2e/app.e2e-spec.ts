import { MyContactsPage } from './app.po';

describe('my-contacts App', function() {
  let page: MyContactsPage;

  beforeEach(() => {
    page = new MyContactsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
