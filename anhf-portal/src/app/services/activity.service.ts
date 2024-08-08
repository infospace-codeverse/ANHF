import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  updateDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CollectionReference, DocumentReference } from 'firebase/firestore';

export interface Activity {
  id?: string;
  name: string;
  description: string;
  date: { seconds: number; nanoseconds: number } | Date | any;
  attendees: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activityCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.activityCollection = collection(firestore, 'Activity');
  }

  getActivities(): Observable<Activity[]> {
    return collectionData(this.activityCollection, {
      idField: 'id',
    }) as Observable<Activity[]>;
  }

  addActivity(activity: Activity) {
    return addDoc(this.activityCollection, activity);
  }

  updateActivity(activity: Activity): Promise<void> {
    const activityDocRef: DocumentReference = doc(
      this.firestore,
      `Activity/${activity.id}`
    );
    return updateDoc(activityDocRef, { ...activity });
  }
}
