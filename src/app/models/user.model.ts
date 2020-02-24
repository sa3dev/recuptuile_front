export interface User {
    token: string;
}

export interface UserCredential {
   email: string;
   password: string;
}


export interface UserRegister {
    full_name: string;
    email: string;
    type: string;
    phonenumber: string;
    password: string;
}
