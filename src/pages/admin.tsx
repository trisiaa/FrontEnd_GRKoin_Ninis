const Admin = () => {
    return (
        <main className="p-4 flex flex-col gap-4 bg-[#272f33] h-screen">

            <div className="flex justify-between items-center ">
                <p className="text-white">Hi, Admin !</p>
                <button className="border p-2 rounded-lg w-[5rem] bg-[#22a5ad] text-white">Logout </button>
            </div>
            <div className="flex flex-col gap-[1rem] rounded-xl  bg-[#464b50] h-full p-6  items-center">
                <div className="flex w-full justify-center">
                    <a href='/tukar-koin' className="flex w-[18rem] h-full border p-4 gap-[1.5rem] rounded-xl">
                        <div className="flex">
                            <div className="w-[4rem] h-[4rem] border rounded-full"></div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-white">Caca</p>
                            <p className="text-[#777777]">Jumlah Koin 10.000</p>
                        </div>
                    </a>
                </div>
                <div className="flex w-full justify-center">
                    <a href='/tukar-koin' className="flex w-[18rem]  h-full border p-4 gap-[1.5rem] rounded-xl">
                        <div className="flex">
                            <div className="w-[4rem] h-[4rem] border rounded-full"></div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-white">Ninis</p>
                            <p className="text-[#777777]">Jumlah Koin 50.000</p>
                        </div>
                    </a>
                </div><div className="flex w-full justify-center">
                    <a href='/tukar-koin' className="flex w-[18rem] h-full border p-4 gap-[1.5rem] rounded-xl">
                        <div className="flex">
                            <div className="w-[4rem] h-[4rem] border rounded-full"></div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-white">Trisia</p>
                            <p className="text-[#777777]">Jumlah Koin 7.000</p>
                        </div>
                    </a>
                </div>
            </div>


        </main>
    )
}

export default Admin