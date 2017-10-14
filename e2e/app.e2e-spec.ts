import { AngularCrashPage } from './app.po';

describe('angular-crash App', () => {
  let page: AngularCrashPage;

  beforeEach(() => {
    page = new AngularCrashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
