import { AngularCliCiPage } from './app.po';

describe('angular-qs-cli App', () => {
  let page: AngularCliCiPage;

  beforeEach(() => {
    page = new AngularCliCiPage();
  });

  it('should calculate correct area', () => {
    page.navigateTo();

    page.setRadius(10);
    page.clickButton('Calculate');

    expect(page.getResult()).toEqual('Area: 314');
  });
});
