
exports.up = function(knex, Promise) {
  return knex.schema.table("cluckrtable", table =>{
      table.timestamp("updatedAt").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table("cluckrtable", table=>{
      table.dropColumn("updatedAt");
  })
};
