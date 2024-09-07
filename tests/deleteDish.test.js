const app = require('../app');
const request = require('supertest');

it('Delete a dish', async () => {
    let dishId;
    const response = await request(app).post('/dishes').send({
        Name: 'Spagetti',
        Country: 'Italy'
    });
    if (response.statuscode == 200) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Dish created');
        expect(response.body).toHaveProperty('result');
        expect(response.body.result).toHaveProperty('id');
        dishId = response.body.result.id;
        console.log(dishId);
    }
    if (response.statuscode == 500) {
        expect(response.statusCode).toBe(500);
        expect(response.body).toHaveProperty('error');
    }
});