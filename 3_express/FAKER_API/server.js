var faker = require('faker');
const express = require("express");
const { name } = require('faker');
const app = express();


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser boys");
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

const createUser = () => {
    newUser = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};

const createCompany = () => {
    newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
}
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
})
app.get("/api/company/new", (req, res) => {
    res.json(createCompany());
})
app.get("/api/user/company", (req, res) => {
    res.send([createCompany(), createUser()]);
})
