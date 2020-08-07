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
export function openMethod(store, articleId) {
  return store.dispatch("method/openDBChannel", {
    pathVariables: { articleId }
  });
}

// Create
export function closeMethod(store) {
  return store.dispatch("method/closeDBChannel", { clearModule: true });
}

// Insert new article and return article ID
export function createNewArticle() {
  return Firebase.firestore()
    .collection("reviews")
    .add({});
}
