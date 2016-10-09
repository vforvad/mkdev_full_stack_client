import { get } from 'utils/ApiRequest';

export function getPosts() {
  return get('/posts')
            .then((response) => {
              return response.data.posts;
            });
}
