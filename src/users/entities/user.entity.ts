import { Entity, Column , PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRecover } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
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

