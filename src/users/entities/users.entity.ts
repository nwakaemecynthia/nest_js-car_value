import { Exclude } from "class-transformer";
import { Entity, Column , PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRecover } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    //The @Exclude() decorator is used to exclude the password field from serialization.
    //This means that when the user data is sent in a response, the password field will
    //not be included in the JSON response.
    //However it was commented out because we are using a global interceptor to handle serialization.
    // @Exclude() // Exclude from serialization

    //Interceptors can be used to apply serialization rules globally or at the module level.
    //They can be used to handle serialization for multiple endpoints without having to repeat the @Exclude() decorator on each field.
    password: string;

    @Column({ nullable: true })
    firstName?: string; 

    @Column({ nullable: true })
    lastName?: string;

    @AfterInsert()
    logInsert() {
        console.log('User created:', this, 'with ID:', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('User updated:', this, 'with ID:', this.id);
    }

    @AfterRecover()
    logRecover() {
        console.log('User recovered:', this, 'with ID:', this.id);
    }
}

