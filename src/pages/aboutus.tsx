const AboutUs = () => {
    return (
        <main className="p-4 flex flex-col gap-4 bg-[#272f33] h-screen">
            <div className="flex justify-between items-center ">
                <p className="text-white">Hi, User !</p>
                <button className="border p-2 rounded-lg w-[5rem] bg-[#22a5ad] text-white">Logout </button>
            </div>
            <div className="flex  rounded-xl  bg-[#464b50] h-full p-4 justify-center items-center">
                <div className="bg-[#1f2125] rounded-xl">
                    <div className="flex flex-col p-4 gap-[1rem]">
                        <a href='/tukar-koin' className="flex w-full h-full  p-2 gap-[1.5rem] rounded-xl">
                            <div className="flex">
                                <div className="w-[4rem] h-[4rem] border rounded-full"></div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-white">Gerobak Rakyat </p>
                                <p className="text-[#777777]">About Us</p>
                            </div>
                           
                        </a>
                        <p className="text-white">
                        Gerobak Rakyat adalah jasa angkut sampah menuju tempat pembuangan akhir (TPA) secara rutin dan terorganisir. Saat ini Gerobak Rakyat memiliki suatu sistem yaitu GR Koin. GR Koin adalah koin yang diberikan kepada pelanggan Gerobak Rakyat sebagai bentuk reward sekaligus kompensasi bagi pelanggan. Setiap keterlambatan pengambilan sampah dan ketertiban pembayaran, pelanggan akan diberikan 500 GR Koin. Sedangkan untuk keberhasilan menambah pelanggan baru, pelanggan akan diberikan 50.000 GR Koin. GR Koin dapat ditukar dengan saldo e-wallet dengan minimal penukaran 10.000 GR Koin.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default AboutUs