import { getServerSession } from "next-auth";
import { getp2p } from "../../lib/actions/p2pmoney";
import { authOptions } from "../../lib/auth";

export async function getData(){
    const session = await getServerSession(authOptions);
    const p2ptnx = await getp2p();
    // let num : number[] = 
    return p2ptnx.map((t)=>{
        if(t.fromUser == session.user?.id)
            return t.amount;
        else return 0;
    })
}