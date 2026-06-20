import { rootUrl } from './rootUrl';

export const blogSettings = {
  postsPerPage: 3,
  sidePostsCount: 3,
  featuredPosts: [],
  apiUrlAll: 'https://dev.to/api/articles?tag=programming',
  apiUrlSingle: 'https://dev.to/api/articles/',
  apiUrlAllLocal: rootUrl + '/api/blog',
  apiUrlSingleLocal: rootUrl + '/api/blog/post/',
};
