import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import addPEInput from "./APIs/addPEInput.js";
import getAllPEInputs from "./APIs/getPeInput.js"
import deletePEInput from "./APIs/deletePEInput.js";
import addFieldInput from "./APIs/addFieldInput.js";
import getAllFieldInputs from "./APIs/getFieldInput.js";
import deleteFieldInput from "./APIs/deleteFieldInput.js";
import dashboard from "./APIs/dashboard.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
app.use(cors({
    origin: ['http://localhost:3000', 'https://inventorymanagement-ti.netlify.app'],
    methods: 'GET,POST,PUT',
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/addPEInput', async (request, response) => {
    const userData = request.body;
      
    const res = await addPEInput(userData);
    return response.json(res);
  
  });

  app.post('/addFieldInput', async (request, response) => {
    const userData = request.body;
      
    const res = await addFieldInput(userData);
    return response.json(res);
  
  });

app.get('/getPEInputs', async (request, response) => {
    const res = await getAllPEInputs(request.query);
    return response.json(res);

})

app.get('/getDashboard', async (request, response) => {
    const res = await dashboard(request.query);
    return response.json(res);

})
app.get('/getFieldInputs', async (request, response) => {
    const res = await getAllFieldInputs(request.query);
    return response.json(res);

})


app.post('/deletePEInput', async (request, response) => {
    console.log('request', request)
    const userData = request.body;
    const res = await deletePEInput(userData);
    return response.json(res);

});
app.post('/deleteFieldInput', async (request, response) => {
    console.log('request', request)
    const userData = request.body;
    const res = await deleteFieldInput(userData);
    return response.json(res);

});


// app.post('/signIn', async (request, response) => {
//     const userData = request.body;

//     const res = await signIn(userData);
//     return response.json(res);

// });

// app.post('/signOut', async (request, response) => {

//     const authOutput = checkAuth(request);

//     return response.json(authOutput);

// });

// app.post('/addToCart', async (request, response) => {
//     const userData = request.body;

//     const authOutput = checkAuth(request);
//     if (authOutput.Success === false) return response.json(authOutput)

//     const res = await addToCart(userData, authOutput);
//     return response.json(res);

// });

// app.post('/addReview', async (request, response) => {
//     const userData = request.body;

//     const authOutput = checkAuth(request);
//     if (authOutput.Success === false) return response.json(authOutput)
//     const res = await addReview(userData, authOutput);
//     return response.json(res);

// });

// app.put('/addToCart', async (request, response) => {
//     const userData = request.body;
//     const authOutput = checkAuth(request);
//     if (authOutput.Success === false) return authOutput;
//     const res = await updateCart(userData, authOutput);
//     return response.json(res);

// });

// app.get('/getReviews/:bookID', async (request, response) => {

//     const userData = request.params.bookID;

//     const res = await getReviews(userData);

//     return response.json(res);

// });


// app.get('/getUserInfo', async (request, response) => {
//     const userData = request.query;
//     const authOutput = checkAuth(request);
//     if (authOutput.Success === false) {
//         return response.json(authOutput);
//     }
//     const res = await getUserInfo(userData, authOutput);
//     return response.json(res);

// });

// app.get('/getHomepageBooks', async (request, response) => {

//     const res = await getHomepageBooks(request.query);

//     return response.json(res);

// })
const database_url = process.env.DATABASE_URL;
mongoose.connect(database_url).then(() => {
    console.log('database_urlfv', database_url)

}).catch((error) => {
console.log('error l',error)
})


app.listen(PORT, () => {
console.log(`Running on ${PORT}`, database_url);
})  