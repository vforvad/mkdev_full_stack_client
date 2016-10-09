import { get, post } from 'utils/ApiRequest';

export function getPosts() {
  return get('/posts')
            .then((response) => {
              return response.data.posts;
            });
}

export function createPost(postData) {
  return post('/posts', { post: postData })
    .then((response) => {
      return response.data.post;
    })
    .catch((errors) => {
      return erros.data.errors;
    });
}
