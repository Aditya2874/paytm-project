export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element {
    return (
        <div className="w-full">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-5 font-bold">
            Transactions
        </div>
        <div className="mb-4">
            <button className="bg-[#d5d1d1] py-2 px-4 mr-4">All</button>
            <button className="bg-[#d5d1d1] py-2 px-4">P2p</button>
        </div>
        <div>
              {children}
      </div>
        </div>
    );
  }