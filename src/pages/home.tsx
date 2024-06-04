const Home = () => {
    return (
        <main className="p-4 flex flex-col gap-4 bg-[#272f33] h-screen">
            <div className="flex justify-between items-center ">
                <p className="text-white">Hi, User !</p>
                <button className="border p-2 rounded-lg w-[5rem] bg-[#22a5ad] text-white">Logout </button>
            </div>
            <div className="flex border rounded-xl border-[#808080] bg-[#464b50] h-[8rem] p-4 justify-between">
                <div>
                    <p className="text-white">Total Pointmu</p>
                </div>
                <div className="flex items-center justify-center w-[50%]">
                    <div className="w-full p-2 border rounded-xl h-[6rem] border-[#808080] bg-[#22a5ad]">
                        <p className="text-[3rem] text-center text-white">50.000</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[1rem] ">
                <a href='/tukar-koin' className="flex w-full h-full border p-4 gap-[1.5rem] rounded-xl">
                    <div className="flex">
                        <div className="w-[4rem] h-[4rem] border rounded-full"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-white">Tukar Koin</p>
                        <p className="text-[#777777]">Minimal Pertukaran 10.000 Koin</p>
                    </div>
                </a>
                <a href="/riwayat" className="flex w-full h-full rounded-xl border p-4 gap-[1.5rem]">
                    <div className="flex">
                        <div className="w-[4rem] h-[4rem] border rounded-full"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-white">Riwayat Koin</p>
                        <p className="text-[#777777]">Lihat Transaksi Koinmu</p>
                    </div>
                </a>
                <a className="flex w-full h-full rounded-xl border p-4 gap-[1.5rem]">
                    <div className="flex">
                        <div className="w-[4rem] h-[4rem] border rounded-full"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-white">FAQ</p>
                        <p className="text-[#777777]">WA Admin Gerobak Rakyat </p>
                    </div>
                </a>
                <a href='/about-us' className="flex w-full h-full rounded-xl border p-4 gap-[1.5rem]">
                    <div className="flex">
                        <div className="w-[4rem] h-[4rem] border rounded-full"></div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-white">About Us</p>
                        <p className="text-[#777777]">Tentang Gerobak Rakyat </p>
                    </div>
                </a>
            </div>

        </main>
    )
}

export default Home