export interface Partecipant {    
    id?: string;
    axeraCode: boolean; //non avendo dati riguardanti ai clienti axera per il momento ho inserito un boolean
    //dati utente
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    nationalInsuranceNumber: string;
    email: string;
    telephoneNumber: number;
    tipology: string;
    //checkbox
    iscriptionForm: boolean;
    privacyAccepted: boolean;
    imageReleaseAccepted: boolean;
    paymentDone: boolean;
  }