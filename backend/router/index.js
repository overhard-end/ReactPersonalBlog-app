const Router = require('express').Router;
const userController = require('../controler/user-controler');
const PostControler = require('../controler/post-controler');
const router = new Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post(
  '/sign-up',
  body('firstName').isLength({ min: 2 }),
  body('lastName').isLength({ min: 2 }),
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),

  userController.registration,
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activated/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);
router.post('/add-post', authMiddleware, PostControler.addPost);
router.post('/add-comment', authMiddleware, PostControler.addComment);
router.get('/get-comments', authMiddleware, PostControler.getComments);
router.post('/delete-post', authMiddleware, PostControler.deletePost);
router.post('/change-user', authMiddleware, userController.changeUser);
router.get('/get-post', PostControler.getPost);

module.exports = router;
