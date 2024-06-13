import { Card } from "@repo/ui/card";
import getOnRampTransactions from "../../lib/actions/getOnRampTransaction";

export default async function () {
    const transactions = await getOnRampTransactions();
    return <div className="w-full">
        <div className="mr-4">
            
        <Card title="All Transactions" >
        <div className="pt-2 pr-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
        </div>
    </div>
}