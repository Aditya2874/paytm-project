import { Card } from "@repo/ui/card"

export const P2pTransactions = ({
    transactions
}: {
    transactions: {
        amount: number,
        // TODO: Can the type of `status` be more specific?
        fromUser: number,
        toUser: number
    }[]
},
) => {
    if (!transactions.length) {
        return <Card title="P2P Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="P2P Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        From {t.fromUser}
                    </div>
                    <div>
                        To {t.toUser}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>
            </div>)}
        </div>
    </Card>
}