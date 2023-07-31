import { getFirestore, doc, getDoc, updateDoc, addDoc, deleteDoc, collection, writeBatch } from "firebase/firestore";

const db = getFirestore();

export async function updatePoints(username, pointType, pointsToAdd) {
  // Get a reference to the points document for the user
  const pointsRef = doc(db, 'points', username);

  const pointsSnap = await getDoc(pointsRef);

  if (!pointsSnap.exists()) {
    // Handle case where points document does not exist
    console.log("No points document for this user!");
    return;
  } else {
    const pointsData = pointsSnap.data();

    const newPoints = (pointsData[pointType] || 0) + pointsToAdd;

    await updateDoc(pointsRef, {
      [pointType]: newPoints,
    });
  }
}

export async function addEvent (event) {
  try {
    const eventsRef = collection(db, "events");
    const docRef = await addDoc(eventsRef, event);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id; // this returns the ID of the new document
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export async function deleteEvent (eventId) {
  try {
    const eventRef = doc(db, "events", eventId);
    await deleteDoc(eventRef);
    console.log("Document deleted with ID: ", eventId);
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};

export async function updateEvents(eventList) {
    let batch = writeBatch(db);
  
    for (let memberId in eventList) {
      for (let eventId in eventList[memberId]) {
        let event = eventList[memberId][eventId];
        let eventRef = doc(db, 'points', memberId + "_" + eventId);
  
        batch.update(eventRef, {
          memberId: memberId,
          eventId: eventId,
          points: event.points,
          pointType: event.pointType,
        });
      }
    }
  
    // Commit the batch
    await batch.commit();
}