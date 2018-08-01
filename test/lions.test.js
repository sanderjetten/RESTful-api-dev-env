var app = require('../server/server');
var request = require('supertest');
var expect = require('chai').expect;
var _ = require('lodash');

/* describe('[POST]', function(){
  var lion = {name: "Sander", age: "5", pride: "Jetten Clan", gender: "male"};

  before(function(){
    request(app)
      .post('/lions')
      .send(lion)
      .end(function(err, resp) {
        lion.id = resp.body.id;
      })
  });

  it('should GET all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        expect(resp.body).to.deep.include.members([lion]);
        done();
      })
  });

  it('Should POST a lion and return it with id', function(done){
    request(app)
      .post('/lions')
      .send(lion)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function(err, resp){
        expect(resp.body).to.eql(lion);
        expect(resp.body.id).to.be.an('String');
        done();
      });
  });

  it('Should PUT the new values in the lion array and return the lion with new value', function(done){
    var updateLion = {name: "NewName"};
    request(app)
      .put('/lions/' + lion.id)
      .send(updateLion)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp){
        lion.name = updateLion.name;
        expect(resp.body.name).to.eql(lion.name);
        done();
      });
  });

  it('Should GET the lion by id', function(done){
    request(app)
      .get('/lions/' + lion.id)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp){
        expect(resp.body).to.eql(lion);
        done();
      });
  });

  it('Should DELETE the lion by id and return it', function(done){
    request(app)
      .del('/lions/' + lion.id)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp){
        expect(resp.body).to.eql(lion);
        done();
      });
  });
});
*/
