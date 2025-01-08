const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// test

router.get('/test', (req, res) => {
    res.send('Deu certo!');
});

// shipping route form

router.get
(
    '/add',
    (require, response) => 
    {
        response.render('add');
    }
);

// job vacancy details

router.get
(
    '/view/:id',
    (require, response) => 
    {
        Job.findOne
        (
            {
                where: 
                {
                    id: require.params.id
                }
            }
        )
        .then
        (
            job => 
            {
                response.render
                (
                    'view', { job }
                )
            }
        )
        .catch
        (
            error => console.log(error)
        )
    }
);

// add job via post

router.post
(
    '/add', 
    (require, response) => 
    {
        let {title, salary, company, description, email, new_job} = require.body;

        // insert 
        Job.create
        (
            {
                title,
                description,
                salary,
                company, 
                email,
                new_job
            }
        )
        .then
        (
            () => 
            {
                response.redirect('/');
            }
        )
        .catch
        (            
            error => 
            {
                console.log(error);
            }            
        );
    }
);

module.exports = router;