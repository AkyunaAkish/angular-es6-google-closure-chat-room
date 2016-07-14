exports.up = (knex, Promise) => {
  return knex.schema.createTable('messages', (table) => {
    table.increments()
    table.string('sender')
    table.string('message')
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('messages')
}
