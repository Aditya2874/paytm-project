import { Card } from "@repo/ui/card";
import DashboardChart from "../../../components/DashboardChart";
import getBalance from "../../lib/actions/getBalance";
import { getp2p, getUserData } from "../../lib/actions/p2pmoney";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import UserInfoCard from "../../../components/UserInfoCard";
import React from "react";


const change = (s: number, e: number) => ({
    labels: ['Total'],
    datasets: [
        {
            label: 'Spending',
            data: [s / 100],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
        {
            label: 'Earning',
            data: [e / 100],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
        },
    ],
});
export default async function () {
    const session = await getServerSession(authOptions);
    const balance = await getBalance();
    const Tnx = await getp2p();
    const userData = await getUserData();
    let spend = 0;
    let earn = 0;
    Tnx.map((t) => {
        if (t.fromUser == session?.user?.id)
            spend += t.amount;
        else
            earn += t.amount;
    });
    const chartData = change(spend,earn);
    return <div className="w-full p-5">
        <div className="flex justify-center text-4xl text-[#6a51a6] pt-8 font-bold">
            Welcome to QuickTrans - Online Money Transfer Service
        </div>
        <div className="flex justify-evenly mt-8 text-xl">
            <Card title="Total Balance"><div className="mt-4 text-[#6a51a6]">Rs {balance.amount / 100}</div></Card>
            <Card title="Unlocked Balance"><div className="mt-4 text-[#6a51a6]">Rs {(balance.amount - balance.locked)/100}</div></Card>
            <Card title="Locked Balance"><div className="mt-4 text-[#6a51a6]">Rs {balance.locked / 100}</div></Card>
        </div>
        <div className="flex justify-evenly h-1/2 mt-8">
                <DashboardChart data={chartData} />
                <UserInfoCard name={userData?.name + ""} email={userData?.email + ""} number={userData?.number + ""} />
        </div>
    </div>
}