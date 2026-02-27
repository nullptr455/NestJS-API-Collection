import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
          "id" : 1,
          "name" : "kashif",
          "email":"kashif@gmail.com",
          "role" : "ADMIN",
        },
        {
          "id" : 2,
          "name" : "kashif asof",
          "email":"kashif2@gmail.com",
          "role" : "INTERN",
        },
        {
          "id" : 3,
          "name" : "kashif3",
          "email":"kashif3@gmail.com",
          "role" : "ENGINEER",
        },
        {
          "id" : 4,
          "name" : "kashif4",
          "email":"kashif4@gmail.com",
          "role" : "INTERN",
        },
        {
          "id" : 5,
          "name" : "kashif5",
          "email":"kashif5@gmail.com",
          "role" : "ADMIN",
        }

    ]
    findAll(role?: "INTERN" | "ADMIN" | "ENGINEER"){
         if(role){
           return this.users.filter(user => user.role === role)
         }
         return this.users
        }
    findOne(id : number){
        const user = this.users.find(user => user.id === id)
        return user
    }    
    create(user :{ name : string ,email : string, role : 'INTERN' | 'ADMIN' 
        | 'ENGINEER'} ){
            const topHighestId = [...this.users].sort((a,b) => b.id - a.id)
            const newUser = {
                id : topHighestId[0].id+1,
                ...user
            }
            this.users.push(newUser)
            return newUser
        }
    update(id:number , updatedUser :{name? : string ,email? : string, role? : 'INTERN' | 'ADMIN' 
        | 'ENGINEER'}){
            this.users = this.users.map(user =>{
                if(user.id === id){
                    return { ...user , ...updatedUser}
                }
                return user
            })
            return this.findOne(id)
        }
    delete(id:number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => 
            user.id !== id
        )
        return removedUser
    }    
}