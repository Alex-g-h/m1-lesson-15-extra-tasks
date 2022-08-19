/**
 * Create HTML element with post content
 * @param {*} param0 Is an object contains title and text: {title, text}
 * @returns HTML DIV element with post
 */
export function createPost({ title, text }) {
  const postHTML = document.createElement('div');
  postHTML.className = 'post';
  postHTML.id = 'post';

  // create header for post title
  const headerHTML = document.createElement('h1');
  headerHTML.className = 'post__title';
  headerHTML.textContent = title;

  // create paragraph for post text
  const textHTML = document.createElement('p');
  textHTML.className = 'post__text';
  textHTML.textContent = text;

  // create title for post comments
  const commentsHeaderHTML = document.createElement('b');
  commentsHeaderHTML.className = 'post__comments-text';
  commentsHeaderHTML.textContent = 'Комментарии';

  // create div for post comments
  const commentsDivHTML = document.createElement('div');
  commentsDivHTML.className = 'post__comments';

  // add elements to post div
  postHTML.append(headerHTML);
  postHTML.append(textHTML);
  postHTML.append(commentsHeaderHTML);
  postHTML.append(commentsDivHTML);

  return postHTML;
}


/**
* Create HTML element with post comment
 * @param {*} param0 Is an object contains title and text: {author, text}
 * @returns HTML DIV element with comment
 */
export function createComment({ author, text }) {
  const commentHTML = document.createElement('div');
  commentHTML.className = 'post-comment';

  // create comment author section
  const authorHTML = document.createElement('span');
  authorHTML.className = 'post-comment__author';
  authorHTML.textContent = author;

  // create comment text section
  const textHTML = document.createElement('span');
  textHTML.className = 'post-comment__text';
  textHTML.textContent = text;

  // add elements to comment
  commentHTML.append(authorHTML);
  commentHTML.append(textHTML);

  return commentHTML;
}
