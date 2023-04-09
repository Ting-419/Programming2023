import express from 'express';

import {
  getMyInfo,
  getCurrentTime
} from '../controllers/self.mjs';

const router = express.Router()

// router.get('/myFullNameAndGroup', (req, res) => {
//   res.send('My name is Ting, my group is KP-14.')
// })

// router.get('/theCurrentTime', (req, res) => {
//     res.send({currentTime: new Date().toISOString()})
//     })

// with controllers
router.get('/myFullNameAndGroup', (req, res) => {
  const result = getMyInfo();
  res.send(result)
});
router.get('/CurrentTime', (req, res) => {
 const result = getCurrentTime();
  res.send(result)
});

export default router;