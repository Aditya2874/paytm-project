import { P2pTransactions } from "../../../../components/p2pTransactions";
import { getp2p } from "../../../lib/actions/p2pmoney";

export default async function p2pPage(){
    const tnx = await getp2p();
    return <div>
        <P2pTransactions transactions={tnx}/>
    </div>
}

