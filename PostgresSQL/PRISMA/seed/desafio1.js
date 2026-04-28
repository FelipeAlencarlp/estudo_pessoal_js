/*
    Desafio 1 - Seed

        Missão: 
            1. Criar um script de seed usando Prisma

            2. Inserir:
                - 2 usuários
                - 3 produtos

            3. Criar:
                - 1 pedido para um usuário
                - adicionar 2 produtos nesse pedido

            4. Pensar: -> Como o Prisma conecta:
                - pedido <-> produtos (N:N)
*/


/*
    Criar um script de seed usando Prisma:
        import "dotenv/config";
        import { Pool } from "pg";
        import { PrismaPg } from "@prisma/adapter-pg";
        import { PrismaClient } from "../generated/prisma/client";

        const connectionString = `${process.env.DATABASE_URL}`;
        const pool = new Pool({ connectionString });
        const adapter = new PrismaPg(pool);
        const prisma = new PrismaClient({ adapter });

        dentro de prisma.config.ts implementei:
            seed: "tsx prisma/seed.ts"
*/

/*
    Inserir:
        - 2 usuários
        - 3 produtos

        const ana = await prisma.user.upsert({
            where: { email: 'ana@email.com' },
            update: {},
            create: {
                name: 'Ana',
                email: 'ana@email.com'
            }
        });

        const felipe = await prisma.user.upsert({
            where: { email: 'felipe@email.com' },
            update: {},
            create: {
                name: 'Felipe',
                email: 'felipe@email.com'
            }
        });
        upsert: Usado no usuário para evitar erros se o seed for rodado duas vezes.
        where: é usado para quando tem campos unique no banco

    Abordagem criando uma ordem para um usuário criando o produto
    direto na ordem:
        await prisma.order.create({
            data: {
                userId: felipe.id,
                products: {
                    create: [
                        {
                            name: 'Mouse',
                            price: 150.00
                        },
                        {
                            name: 'Teclado',
                            price: 250.00
                        }

                    ]
                },
                total: 400
            }
        });

    Abordagem criando produto primeiro depois conectando dentro
    da ordem criada:
        const p1 = await prisma.product.create({
            data: {
                name: 'Mouse',
                price: 150.00
            }
        });

        const p2 = await prisma.product.create({
            data: {
                name: 'Teclado',
                price: 250.00
            }
        });

        const p3 = await prisma.product.create({
            data: {
                name: 'Monitor',
                price: 1250.00
            }
        });

        await prisma.order.create({
            data: {
                userId: felipe.id,
                products: {
                    connect: [
                        { id: p1.id },
                        { id: p2.id }
                    ]
                },
                total: 400
            }
        });
*/

/*
    Pensar: -> Como o Prisma conecta:
        - pedido <-> produtos (N:N)

        A ligação é feita via 'connect'
*/