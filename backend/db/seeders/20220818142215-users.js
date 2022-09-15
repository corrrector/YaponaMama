const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
  async up(queryInterface) {
    const users = [{
      email: 'admin@mail.ru',
      password: await bcrypt.hash('admin', saltRounds),
      name: 'admin',
      phone: 89998887766,
      is_admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      email: 'ok@ok.ru',
      password: await bcrypt.hash('123', saltRounds),
      name: 'kto-to',
      phone: 88887776655,
      is_admin: false,
      orderPhone: 88887777777,
      orderStreet: 'ул. Ленина',
      orderHouse: '96',
      orderEntrance: '7',
      orderFloor: '2',
      orderFlat: '77',
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
