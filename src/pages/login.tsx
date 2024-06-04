const Login = () => {
    return (
        <main className="flex flex-col items-center justify-center  h-screen bg-[#272f33]">
            <div className="flex flex-col  gap-4 border p-8 rounded-xl bg-[#464b50]">
                <article className="flex justify-center items-center ">
                    <h1 className="text-center text-xl text-white">GR Coin</h1>
                </article>
                <div className="flex flex-col gap-2 ">
                    <input type="text" placeholder="Username" className="border p-2 rounded-xl" />
                    <input type="Password" placeholder="Password" className="border p-2 rounded-xl" />
                    <button className="border p-2 rounded-xl text-white bg-[#22a5ad]">Submit</button>
                </div>
            </div>

        </main>
    )
}

export default Login