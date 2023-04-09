import express from 'express'; 
import bodyParser from 'body-parser';

import selfRouter from './routers/self.mjs';

//console.log(bodyParser);
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', selfRouter);

// app.get('/myFullName', (req, res) => {
//   res.send('My full name is Ting Long. ')
// })

// app.post('/myGroup',(req, res) => {
//     console.log(req.body);
//     res.send('My group is KP-14.')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})