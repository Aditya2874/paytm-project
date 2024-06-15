import { SidebarItem } from "../../../components/SidebarItem";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div className="w-full">
            <div className="text-4xl text-[#6a51a6] p-8 mb-2 font-bold">
                Transactions
            </div>
            <div className="pl-8 mb-4 flex items-center gap-x-4">
                <SidebarItem href={"/transactions/all"} title={"All"} icon={<AllIcon />}></SidebarItem>
                <SidebarItem href={"/transactions/p2pT"} title={"P2P"} icon={<P2PTransferIcon />}></SidebarItem>
            </div>
            <div className="px-8">
                {children}
            </div>
        </div>
    );
}

function AllIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>

}
function P2PTransferIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
}
