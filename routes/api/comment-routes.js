const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller.js');


// /api/comments/<pizzaId>
router
    .route('/:pizzaId' )
    .post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// /api/<pizzaId>/<commentId>/<replyId>
/* created new route because you need the id of the individual reply,
    not just its parent
*/

/*
It's kind of like saying,
"Go to this pizza,
then look at this particular comment,
then delete this one reply."
*/
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;