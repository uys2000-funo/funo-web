import { FieldValue } from "firebase-admin/firestore";
import { firestore } from "./firebase";
import { FirebaseDocument } from "~/server/types/firebase";
//Update this on app too when you changed it
const _doc = function (doc: Record<string, any>) {
  let d = { ...doc };
  if (!d.firebase) d.firebase = Object.assign({}, new FirebaseDocument());
  else {
    if (!d.firebase.ctimestamp) d.firebase.ctimestamp = Date.now();
    if (!d.firebase.utimestamp) d.firebase.utimestamp = 0;
    if (!d.firebase.dtimestamp) d.firebase.dtimestamp = 0;
    if (!d.firebase.updateCount) d.firebase.updateCount = 0;
    if (!d.firebase.requestCount) d.firebase.requestCount = 0;
    if (!d.firebase.ownerId) d.firebase.ownerId = "anonymous";
    if (!d.firebase.creatorId) d.firebase.creatorId = "anonymous";
  }
  return d;
};

export const getDoc = async function (path: string) {
  const doc = await firestore.doc(path).get();
  setTimeout(() => updateReciveCount(path));
  if (doc.exists) return doc.data();
  return undefined;
};

export const setDoc = async function (
  path: string,
  document: Record<string, any>
) {
  await firestore.doc(path).set(_doc(document));
  return true;
};

export const addDoc = async function (
  path: string,
  document: Record<string, any>
) {
  const { id } = await firestore.collection(path).add(_doc(document));
  return id;
};

export const updateDoc = async function (
  path: string,
  document: Record<string, any>
) {
  document.firebase.utimestamp = Date.now();
  document.firebase.updateCount = FieldValue.increment(1);
  await firestore.doc(path).update(document);
  return true;
};
export const updateReciveCount = async function (path: string) {
  const document = { firebase: { updateCount: FieldValue.increment(1) } };
  await firestore.doc(path).update(document);
  return true;
};

export const deleteDoc = async function (
  path: string,
  document: Record<string, any>
) {
  document.firebase.dtimestamp = Date.now();
  await firestore.doc(path).update(document);
  return true;
};
