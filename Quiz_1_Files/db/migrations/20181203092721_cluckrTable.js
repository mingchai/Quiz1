
exports.up = function(knex, Promise) {
  return knex.schema.createTable("cluckrtable", table =>{
      table.increments("id");
      table.text("username");
      table.string("image_url");
      table.text("content");
      table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("cluckrtable");
};
