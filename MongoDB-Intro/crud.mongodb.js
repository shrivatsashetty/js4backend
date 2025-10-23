const database = 'salesDb';

const collection = 'sales'

use(database);

db.createCollection(collection);

db.sales.insertOne(
    {
        "_id" : 1, 
        "item" : "abc", 
        "price" : 10, 
        "quantity" : 2, 
        "date" : new Date("2014-03-01T08:00:00Z")
    }
);

db.sales.insertMany([
    { "_id" : 2, "item" : "abc", "price" : 10, "quantity" : 2, "date" : new Date("2014-03-01T08:00:00Z") },
    { "_id" : 3, "item" : "jkl", "price" : 20, "quantity" : 1, "date" : new Date("2014-03-01T09:00:00Z") },
    { "_id" : 4, "item" : "xyz", "price" : 5, "quantity" : 10, "date" : new Date("2014-03-15T09:00:00Z") },
    { "_id" : 5, "item" : "xyz", "price" : 5, "quantity" :  20, "date" : new Date("2014-04-04T11:21:39.736Z") },
    { "_id" : 6, "item" : "abc", "price" : 10, "quantity" : 10, "date" : new Date("2014-04-04T21:23:13.331Z") },
    { "_id" : 7, "item" : "def", "price" : 7.5, "quantity": 5, "date" : new Date("2015-06-04T05:08:13Z") },
    { "_id" : 8, "item" : "def", "price" : 7.5, "quantity": 10, "date" : new Date("2015-09-10T08:43:00Z") },
    { "_id" : 9, "item" : "abc", "price" : 10, "quantity" : 5, "date" : new Date("2016-02-06T20:20:13Z") },
]);


db.sales.findOne(
    { "_id" : 1 },
    { "_id" : 0 }
);

db.sales.find(
    { "item" : "abc" },
    { "price" : 1 }
);


let cursor = db.sales.find(
    { "price": { $gte: 10 } },
    { "price": 1 }
);

/* prints to console if more than 20 documents present in output query */
cursor.toArray();


db.sales.updateOne(
    { "_id" : 1},
    { $inc: { "quantity" : 1 }}
);

use("test");
db.sales.updateMany(
    { "item" : "abc" },
    { $set: { "price": 9 }}
);


db.sales.deleteOne(
  { "_id" : 9 }
);
