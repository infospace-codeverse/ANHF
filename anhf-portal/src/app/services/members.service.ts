import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { addDoc, CollectionReference, DocumentReference } from 'firebase/firestore';

export interface Member {
  id?: string;
  email: string;
  name: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private memberCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.memberCollection = collection(firestore, 'Members');
  }

  getMembers(): Observable<Member[]> {
    return collectionData(this.memberCollection, {
      idField: 'id',
    }) as Observable<Member[]>;
  }

  addMember(member: Member) {
    return addDoc(this.memberCollection, member);
  }

  updateMember(member: Member): Promise<void> {
    const memberDocRef: DocumentReference = doc(this.firestore, `Members/${member.id}`);
    return updateDoc(memberDocRef, { ...member });
  }
}
