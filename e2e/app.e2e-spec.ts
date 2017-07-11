import { DidacticParakeetPage } from './app.po';

describe('didactic-parakeet App', () => {
  let page: DidacticParakeetPage;

  beforeEach(() => {
    page = new DidacticParakeetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
