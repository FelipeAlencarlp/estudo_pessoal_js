/*
    Desafio 1 - Início ORM
        Sem código. Só raciocínio.

        Missão:
            1. Criar um model User com:
                - id (auto incremento)
                - name
                - email (único)

            2. Criar um model Product com:
                - id
                - name
                - price

            3. Criar um model Order com:
                - id
                - total
                - userId (relacionamento)

            4. Pensar (sem código): -> Como representar:
                - 1 usuário -> vários pedidos

            5. Pensar: -> como representar:
                - pedido -> vários produtos
*/


/*
    Criar um model User com:
        - id (auto incremento)
        - name
        - email (único)

    model User {
        id Int @id @default(autoincrement())
        name String?    -> o ? define como não obrigatório
        email String @unique
    }
*/

/*
    Criar um model Product com:
        - id
        - name
        - price

    model Product {
        id Int @id @default(autoincrement())
        name String
        price Decimal @db.Decimal(10,2)
    }
*/

/*
    Criar um model Order com:
        - id
        - total
        - userId (relacionamento)

    model Order {
        id Int @id @default(autoincrement())
        total Decimal @db.Decimal(10,2)
        user User @relation(fields: [userId], references: [id])
        userId Int
    }
*/

/*
    Pensar (sem código): -> Como representar:
        - 1 usuário -> vários pedidos

    Representação:
        Um para Vários: 1:N

    model User {
        id      Int     @id @default(autoincrement())
        name    String
        email   String @unique
        orders Order[]
    }

    model Order {
        id      Int     @id @default(autoincrement())
        total   Decimal @db.Decimal(10,2)
        user    User   @relation(fields: [userId], references: [id])
        userId Int
    }
*/

/*
    Pensar: -> como representar:
        - pedido -> vários produtos

    Representação:
        Muitos para Muitos: N:N

    model Order {
        id      Int     @id @default(autoincrement())
        total Decimal @db.Decimal(10,2)
        user    User    @relation(fields: [userId], references: [id])
        userId Int
        products Product[]
    }

    model Product {
        id      Int     @id @default(autoincrement())
        name String
        price Decimal @db.Decimal(10,2)
        orders Order[]
    }

    Aqui ambas as models precisam ter a referencia uma da outra
*/