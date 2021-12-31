/**
 * @file Disqus constant
 * @module module/disqus/constant
 * @author Surmon <https://github.com/surmon-china>
 */

import { APP } from '@app/app.config'
import { isProdEnv } from '@app/app.environment'
import { CommentPostID } from '@app/interfaces/biz.interface'

export const DISQUS_OAUTH_CALLBACK_URL = isProdEnv
  ? `${APP.URL}/disqus/oauth-callback`
  : `http://localhost:8000/disqus/oauth-callback`

// extends
export const COMMENT_POST_ID_EXTEND_KEY = 'disqus-post-id'
export const COMMENT_THREAD_ID_EXTEND_KEY = 'disqus-thread-id'
export const COMMENT_AUTHOR_ID_EXTEND_KEY = 'disqus-author-id'
export const COMMENT_AUTHOR_USERNAME_EXTEND_KEY = 'disqus-author-username'
export const COMMENT_ANONYMOUS_EXTEND_KEY = 'disqus-anonymous'
export const ARTICLE_THREAD_ID_EXTEND_KEY = 'disqus-thread-id'

// identifier
const GUESTBOOK_IDENTIFIER = 'guestbook'
const ARTICLE_IDENTIFIER_PREFIX = 'article-'
export const getThreadIdentifierByID = (postID: number) => {
  return postID === CommentPostID.Guestbook ? GUESTBOOK_IDENTIFIER : `${ARTICLE_IDENTIFIER_PREFIX}${postID}`
}
export const getIDByThreadIdentifier = (id: string) => {
  return id === GUESTBOOK_IDENTIFIER ? CommentPostID.Guestbook : id.replace(ARTICLE_IDENTIFIER_PREFIX, '')
}