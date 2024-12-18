import { Column, Entity, Index, ManyToOne } from "typeorm";
import { Users } from "./Users";

@Entity("products", { schema: "consulta-SQL" })
export class Products {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("varchar", { name: "created_at", nullable: true, length: 24 })
  createdAt: string | null;

  @ManyToOne(() => Users, (user) => user.products, { nullable: false })
  user?: Users;


    constructor(
        id: string,
        name: string | null,
        createdAt: string | null,
    ) {
        this.id = id
        this.name = name
        this.createdAt = createdAt
    }  
}