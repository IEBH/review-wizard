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

// Reject error if store fails to sync
export function openChannel(store, articleId) {
  return store.dispatch("method/openDBChannel", {
    pathVariables: { articleId }
  });
}

// Insert new article and return article ID
export function createNewArticle() {
  return Firebase.firestore()
    .collection("reviews")
    .add({});
}
