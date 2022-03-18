const notion = require('../notion');
require('dotenv').config();

const databaseId = process.env.NOTION_INGREDIENTS_DATABASE_ID;

module.exports = class Message {
  constructor(data) {}

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await notion.databases.query({
          database_id: databaseId,
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  static updateShoppingList(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await notion.pages.update({
          page_id: data.page_id,
          properties: {
            'Picked Up': {
              checkbox: data.checked,
            },
          },
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
};