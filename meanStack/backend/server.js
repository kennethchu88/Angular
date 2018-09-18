import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Issue from './models/Issue';


const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

var uri = 'mongodb+srv://admin:admin@cluster0-i18ft.mongodb.net/test?retryWrites=true';
mongoose.connect(uri, { useNewUrlParser: true }, function(err, client) {
   // perform actions on the collection object
   // client.collection("issues").deleteMany();
   if (err) client.close();
});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});


router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/issues/page/:page').get((req,res) => {

    var query = Issue.find().sort('id').skip(parseInt(req.params.page)).limit(10);

    query.exec(function(err, results) { 
        if (err)
            console.log(err);
        else
            res.json(results);
    });

})

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    })
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
    .then(issue => {
        res.status(200).json({'issue': 'Added successfully'});
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

router.route('/issues/addAll').post((req, res) => {
    let issues = req.body;
    issues.forEach(function(e){
        let issue = new Issue(e);
        issue.save()
    });
    res.status(200).json({'issue': 'Added successfully'});


});

router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load Document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;
            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

router.route('/issues/search/:query').get((req, res) => {
    Issue.find({
        $or:[{title: {$regex: '.*' + req.params.query + '.*', $options:'i'}}, {responsible: {$regex: '.*' + req.params.query + '.*', $options:'i'}}]}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.status(200).json(issue);
    });
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));

