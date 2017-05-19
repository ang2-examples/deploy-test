import { DeployTestPage } from './app.po';

describe('deploy-test App', () => {
  let page: DeployTestPage;

  beforeEach(() => {
    page = new DeployTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
