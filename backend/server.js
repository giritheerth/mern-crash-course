// entry point for the API

import express from 'express';

const app =express();

app.get('/',(req,res)=>{
    res.send('Server is ready and running!');
});

app.listen(8000,()=>{
    console.log('server started on http://localhost:8000');
});


//mgiCLz7dOgDBgOmb