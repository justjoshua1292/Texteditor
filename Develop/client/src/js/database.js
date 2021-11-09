import { openDB } from 'idb';

const initdb = async () =>
  openDB('Josh', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('Josh')) {
        console.log('Josh database already exists');
        return;
      }
      db.createObjectStore('Josh', { keyPath: 'id', autoIncrement: true });
      console.log('Josh database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) =>
{console.error('putDb not implemented');
const textDB=await openDB ("Josh", 1);
const tx = textDB.transaction("Josh", "readwrite");
const store = tx.objectStore("Josh");
const request = store.put({id: id, Josh:content});
const result = await request;


};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
const textDB=await openDB ("Josh", 1);
const tx = textDB.transaction("Josh", "readwrite");
const store = tx.objectStore("Josh");
const request = store.put({id: id, Josh:content});
const result = await request;
return result;
}

initdb();
