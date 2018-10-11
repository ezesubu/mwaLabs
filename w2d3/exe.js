//Import using
//mongoimport --db mwa -- file zips.json
1.Find all the zip codes in Iowa state.

R. db.zips.aggregate({$match: {population: {$min: 10000}}},{$group: {_id: "0",zip: {$addToSet: "$_id"}}} )

2.Find all the zip codes with a population less than 1000.

R.  db.zips.aggregate({$match:{pop: {$lt:1000}}},{$group: {_id: "0",zip: {$addToSet: "$_id"}}})

3.Find all cities that have more than one zip code, sort the results based by
R.  state and city name.

R. db.zips.aggregate({$group:{_id: "$city", zip_codes:{$addToSet: "$_id"}}},{$match:{zip_codes:{$size: 2}}})

4. Display the least populated city in each state

R.  db.zips.aggregate({$group:{_id: {"city": "$city", "state": "$state"}, "city_pop": {$sum: "$pop"}}},{$sort: {city_pop : 1}},{$group:{_id: "$_id.state", city:{$first: "$_id.city"}, popupation: {$first: "$city_pop"}}},{$sort: {"_id":1}})

