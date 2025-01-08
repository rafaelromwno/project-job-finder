const express = require('express'); // import express module
const router = express.Router(); // create a new router instance
const Job = require('../models/Job'); // import job model

// test route

router.get('/test', (req, res) => {
    res.send('deu certo!'); // send a simple success message to verify the route
});

// route to render the form for adding a new job

router.get
(
    '/add',
    (require, response) => 
    {
        response.render('add'); // render the 'add' view (e.g., add.handlebars or add.ejs)
    }
);

// route to display job vacancy details

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
                    id: require.params.id // retrieve the job id from the route parameters
                }
            }
        )
        .then
        (
            job => 
            {
                response.render
                (
                    'view', { job } // render the 'view' page and pass the job data to the view
                )
            }
        )
        .catch
        (
            error => console.log(error) // log any errors during the database query
        )
    }
);

// route to add a new job via post request

router.post
(
    '/add', 
    (require, response) => 
    {
        // destructure the job details from the request body
        let { title, salary, company, description, email, new_job } = require.body;

        // insert the new job into the database
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
                response.redirect('/'); // redirect to the home page after successful insertion
            }
        )
        .catch
        (            
            error => 
            {
                console.log(error); // log any errors during the database operation
            }            
        );
    }
);

// export the router to be used in other parts of the application

module.exports = router;
