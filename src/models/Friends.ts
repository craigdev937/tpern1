import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

export enum Align {
    good = "GOOD",
    bad = "BAD",
    neutral = "NEUTRAL"
};

@Entity({name: "friends"})
export class Friends extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
    @Column() first: string;
    @Column() last: string;
    @Column() age: number;
    @Column() info: string;
    @Column({type: "enum", enum: Align}) alignment: string;
};



