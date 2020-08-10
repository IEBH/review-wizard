import { Firebase } from "../store/config/firebase.js";

// Return true/false depending on whether article exists
export function checkArticleExists(articleId) {
  return new Promise(resolve => {
    Firebase.firestore()
      .collection("reviews")
      .doc(articleId)
      .get()
      .then(doc => {
        if (doc.exists) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(() => {
        resolve(false);
      });
  });
}

// Sync store and reject error if store fails to sync
export function openArticle(store, articleId) {
  return Promise.all([
    store.dispatch(`titlepage/openDBChannel`, {
      pathVariables: { articleId }
    }),
    store.dispatch(`method/openDBChannel`, {
      pathVariables: { articleId }
    })
  ]);
}

// Close store sync, clear articleId and clear loaded module data
export function closeArticle(store) {
  store.commit("setArticleId", null);
  return Promise.all([
    store.dispatch(`titlepage/closeDBChannel`, { clearModule: true }),
    store.dispatch(`method/closeDBChannel`, { clearModule: true })
  ]);
}

// Insert new article and return article ID
export function createNewArticle() {
  return Firebase.firestore()
    .collection("reviews")
    .add({});
}
