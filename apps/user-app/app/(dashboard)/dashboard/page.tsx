import { Card } from "@repo/ui/card";
import DashboardChart from "../../../components/DashboardChart";
import getBalance from "../../lib/actions/getBalance";
import { getp2p } from "../../lib/actions/p2pmoney";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function () {
    const session = await getServerSession(authOptions);
    const balance = await getBalance();
    const Tnx = await getp2p();
    let spend = 0;
    let earn = 0;
    Tnx.map((t) => {
        if (t.fromUser == session?.user?.id)
            spend += t.amount;
        else
            earn += t.amount;
    });
    return <div className="w-full">
        <div className="flex justify-center text-4xl text-[#6a51a6] pt-8 font-bold">
            Welcome to QuickTrans - Online Money Transfer Service
        </div>
        <div className="flex justify-evenly mt-8 text-xl">
            <Card title="Total Balance"><div className="mt-4 text-[#6a51a6]">Rs {balance.amount / 100}</div></Card>
            <Card title="Spendings"> <div className="mt-4 text-[#6a51a6]">Rs {spend / 100}</div></Card>
            <Card title="Earnings"><div className="mt-4 text-[#6a51a6]">Rs {earn / 100}</div></Card>
        </div>
        <div className="p-10">
            <DashboardChart />
        </div>
    </div>
}