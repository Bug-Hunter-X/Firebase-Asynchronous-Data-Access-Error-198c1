The solution involves using async/await or promises to ensure that the data is loaded before accessing it.  Here's how to modify the code using async/await:
```javascript
async function getData() {
  const docRef = doc(db, "collection", "docId");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}
```
Using promises:
```javascript
getDoc(docRef).then((docSnap) => {
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```