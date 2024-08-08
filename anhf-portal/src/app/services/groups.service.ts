import { Injectable } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  addDoc,
  CollectionReference,
  DocumentReference,
} from 'firebase/firestore';

export interface Group {
  id?: string;
  name: string;
  members: string[];
  leader?: string;
}

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private groupCollection: CollectionReference<Group>;

  constructor(private firestore: Firestore) {
    this.groupCollection = collection(
      firestore,
      'Groups'
    ) as CollectionReference<Group>;
  }

  getGroups(): Observable<Group[]> {
    return collectionData(this.groupCollection, {
      idField: 'id',
    }) as Observable<Group[]>;
  }

  addGroup(group: Group): Promise<DocumentReference<Group>> {
    return addDoc(this.groupCollection, group);
  }

  updateGroup(group: Group): Promise<void> {
    const groupDocRef: DocumentReference<Group> = doc(
      this.firestore,
      `Groups/${group.id}`
    ) as DocumentReference<Group>;
    return updateDoc(groupDocRef, { ...group });
  }
}
