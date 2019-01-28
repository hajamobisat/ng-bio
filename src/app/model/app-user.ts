export interface Roles{
    isUser?: boolean;
    isAdmin?: boolean;
    
} 

export interface AppUser {
    $key: string;
    email: string;
    isActive: boolean;
    roles?: Roles;

}
