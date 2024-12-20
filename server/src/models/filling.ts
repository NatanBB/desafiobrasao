import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Field } from "./field";

@Entity()
export class Filling {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  fieldId!: string;

  @Column("text")
  value!: string;

  @ManyToOne(() => Field, { eager: true })
  field!: Field;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ default: false })
  isRequired!: boolean;
}
