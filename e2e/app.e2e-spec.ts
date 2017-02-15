import { CentaurusAngularPage } from './app.po';

describe('centaurus-angular App', function() {
  let page: CentaurusAngularPage;

  beforeEach(() => {
    page = new CentaurusAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
