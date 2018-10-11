//Import using
//mongoimport --db mwa -- file zips.json
1.Find all the zip codes in Iowa state.

db.zips.aggregate({$match: {population: {$min: 10000}}},{$group: {_id: "0",zip: {$addToSet: "$_id"}}} )

2.Find all the zip codes with a population less than 1000.

db.zips.aggregate({$match:{pop: {$lt:1000}},{$group: {_id: "0",zip: {$addToSet: "$_id"}}})
