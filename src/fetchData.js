import { createPost, createComment } from "./render.js";
import loadingToggle from "./progressLoading.js";

const URL_POST = 'https://jsonplaceholder.typicode.com/posts/';
const URL_COMMENTS = 'https://jsonplaceholder.typicode.com/comments?postId=';

export async function renderPost(postId) {
  try {
    loadingToggle();

    // get post data
    const responsePost = await fetch(`${URL_POST}${postId}`);
    const resultPost = await responsePost.json();

    // get comments data
    const responseComments = await fetch(`${URL_COMMENTS}${postId}`);
    const resultComments = await responseComments.json();

    // generate HTML content
    const resHTML = createPost({ title: resultPost.title, text: resultPost.body });
    if (!resHTML)
      throw new Error('Can\'t create post HTML element');

    resultComments.forEach(comment => {
      const commentsDiv = resHTML.querySelector('.post__comments');
      const newComment = createComment({ author: comment.email, text: comment.body });
      if (!newComment)
        throw new Error('Can\'t create new post comment HTML element');

      commentsDiv?.append(newComment);
    })

    document.body.append(resHTML);
  }
  catch (error) {
    console.error(error);
  }
  finally {
    loadingToggle();
  }

}