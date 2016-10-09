import { get, post } from 'utils/ApiRequest';

/**
 * Get directions list
 * @return {Array} Posts list
 */
export function getPosts() {
  return get('/posts')
            .then((response) => {
              return response.data.posts;
            });
}

/**
 * Create post
 * @param {Object} post attributes
 * @return {Array} Posts list
 */
export function createPost(postData) {
  return post('/posts', { post: postData })
    .then((response) => {
      return response.data.post;
    })
    .catch((errors) => {
      return errors.data.errors;
    });
}
