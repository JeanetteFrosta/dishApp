const app = require('../app');
const request = require('supertest');

let dishName;

it('Create a dish', async () => {
    const response = await request(app).post('/dishes').send({
        Name: 'Miso Ramen',
        Country: 'Japan'
    });
    if (response.statuscode == 200) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Dish created');
        expect(response.body).toHaveProperty('result');
        expect(response.body.result).toHaveProperty('name');
        dishName = response.body.result.name;
    }
    if (response.statuscode == 500) {
        expect(response.statusCode).toBe(500);
        expect(response.body).toHaveProperty('error');
    }
});

it('Delete a dish', async () => {
    const response = await request(app).delete(`/dishes/${dishName}`).send();
    if (response.statuscode == 200) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Dish deleted successfully');
    }
    if (response.statuscode == 500) {
        expect(response.statusCode).toBe(500);
        expect(response.body).toHaveProperty('error');
    }
});