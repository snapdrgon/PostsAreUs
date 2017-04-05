import { PostsAreUsPage } from './app.po';

describe('posts-are-us App', function() {
  let page: PostsAreUsPage;

  beforeEach(() => {
    page = new PostsAreUsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
