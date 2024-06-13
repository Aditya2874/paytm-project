import prisma from "@repo/db/client"
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { P2pTransactions } from "../../../../components/p2pTransactions";

async function Getp2pTransaction(){
    const session = await getServerSession(authOptions);
    const transactions = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id) 
        }
    });
    return transactions.map(t=>({
        amount: t.amount,
        fromUser: t.fromUserId,
        toUser : t.toUserId
    }))
}
export default async function p2pPage(){
    const tnx = await Getp2pTransaction();
    return <div>
        <P2pTransactions transactions={tnx}/>
    </div>
}

