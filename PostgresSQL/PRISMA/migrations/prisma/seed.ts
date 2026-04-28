import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    const felipe = await prisma.user.upsert({
        where: { email: 'felipe@email.com' },
        update: {},
        create: {
            name: 'Felipe',
            email: 'felipe@email.com'
        }
    });

    const ana = await prisma.user.upsert({
        where: { email: 'ana@email.com' },
        update: {},
        create: {
            name: 'Ana',
            email: 'ana@email.com'
        }
    });

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
            price: 1050.00
        }
    });

    const ordem = await prisma.order.create({
        data: {
            userId: felipe.id,
            products: {
                connect: [
                    { id: p1.id },
                    { id: p2.id }
                ]
            },
            total: p1.price.plus(p2.price) // calculo para Decimal no Prisma
        }
    });

    console.log({ felipe, ana, p1, p2, p3 })
    console.log('Ordem de pedido criado com sucesso.', ordem)
}

main()
    .then(async () => {
        await prisma.$disconnect();
        await pool.end();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        await pool.end();
        process.exit(1);
    });