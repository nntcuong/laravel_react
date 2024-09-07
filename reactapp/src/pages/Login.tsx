const Login = () => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h1 className="text-lg font-bold mb-6 text-center">
                    Login
                </h1>
                <form action="">
                    <div className="mb-4">

                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="text"
                            id="email"
                            placeholder=""
                            className="w-full p3 border border-gray-700 rounded-xl focus:outline-none focus:ring focus-blue-200 h-10"
                        />
                    </div>
                    <div className="mb-4">

                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder=""
                            className="w-full p3 border border-gray-700 rounded-xl focus:outline-none focus:ring focus-blue-200 h-10"
                        />
                    </div>
                    <div className="mb-6">
                        <button
                        type="submit"
                        className="w-full bg-blue-500 text-white hover:bg-blue-700 py-3 rounded-md"
                        

                        >
                            Login
                        </button>

                    </div>
                </form>


            </div>

        </div>

    )
}

export default Login