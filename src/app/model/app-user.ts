export interface Roles{
    subscriber?: boolean;
    admin?: boolean;
    
} 

export interface AppUser {
    uid: string;
    email: string;
    roles?: Roles;

}
