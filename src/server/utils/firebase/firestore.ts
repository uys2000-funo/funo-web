import { FieldValue } from "firebase-admin/firestore";
import { firestore } from "./firebase";

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
  await firestore.doc(path).set(document);
  return true;
};

export const addDoc = async function (
  path: string,
  document: Record<string, any>
) {
  const { id } = await firestore.collection(path).add(document);
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
