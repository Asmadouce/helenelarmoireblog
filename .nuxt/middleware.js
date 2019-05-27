const middleware = {}

middleware['pages'] = require('@/middleware/pages.js');
middleware['pages'] = middleware['pages'].default || middleware['pages']

middleware['posts'] = require('@/middleware/posts.js');
middleware['posts'] = middleware['posts'].default || middleware['posts']

export default middleware
