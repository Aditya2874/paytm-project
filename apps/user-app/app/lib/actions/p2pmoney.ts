import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function getp2p(){
    const session = await getServerSession(authOptions);
    const transactions = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
                { fromUserId: Number(session?.user?.id) },
                { toUserId: Number(session?.user?.id) }
            ]
        }
    });
    return transactions.map(t=>({
        amount: t.amount,
        fromUser: t.fromUserId,
        toUser : t.toUserId
    }))
}
