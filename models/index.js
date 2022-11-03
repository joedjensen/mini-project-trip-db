const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

Location.belongsToMany(Traveller, { through: Trip, foreignKey: 'location_id'} )
Traveller.belongsToMany(Location, { through: Trip, foreignKey: 'traveller_id'} )

module.exports = { Location, Traveller, Trip };