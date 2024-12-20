import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Field {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column()
  datatype!: string;

  @Column({ default: false })
  isRequired!: boolean;

  @CreateDateColumn()
  createdAt!: Date;
}
