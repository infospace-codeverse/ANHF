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
  CollectionReference,
  DocumentReference,
  addDoc,
} from 'firebase/firestore';

export interface Beneficiary {
  id?: string;
  email: string;
  name: string;
  phoneNumber: string;
  groupId: string; // Add this property to link to a Group
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class BeneficiaryService {
  private beneficiaryCollection: CollectionReference<Beneficiary>;

  constructor(private firestore: Firestore) {
    this.beneficiaryCollection = collection(
      firestore,
      'Beneficiaries'
    ) as CollectionReference<Beneficiary>;
  }

  getBeneficiaries(): Observable<Beneficiary[]> {
    return collectionData(this.beneficiaryCollection, {
      idField: 'id',
    }) as Observable<Beneficiary[]>;
  }

  addBeneficiary(
    beneficiary: Beneficiary
  ): Promise<DocumentReference<Beneficiary>> {
    return addDoc(this.beneficiaryCollection, beneficiary);
  }

  updateBeneficiary(beneficiary: Beneficiary): Promise<void> {
    const beneficiaryDocRef: DocumentReference<Beneficiary> = doc(
      this.firestore,
      `Beneficiaries/${beneficiary.id}`
    ) as DocumentReference<Beneficiary>;
    return updateDoc(beneficiaryDocRef, { ...beneficiary });
  }
}
