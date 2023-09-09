import express, {Router} from 'express';

const router = express.Router();

router.post('/addnotes', (req, res) => {
    console.log("We are inside routes");
    res.send('Response from POST /addnotes route');
});

export default router;