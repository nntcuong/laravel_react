const Login = () => {
    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-5 rounded shadow-lg w-full max-w-md">
              
                <form action="">
                    <div className="mb-4">

                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
                        <input
                            type="text"
                            id="email"
                            placeholder=""
                            className="w-full p3 border border-gray-700 rounded-xl focus:outline-none focus:ring focus-blue-200 h-10"
                        />
                    </div>
                    <div className="mb-4">

                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder=""
                            className="w-full p3 border border-gray-700 rounded-xl focus:outline-none focus:ring focus-blue-200 h-10"
                        />
                    </div>
                    <div className="mb-2">
                        <button
                        type="submit"
                        className="w-full bg-blue-500 text-white hover:bg-blue-700 py-1.5 shadow-button rounded-md"
                        >
                            Login
                        </button>

                    </div>
                    <p>
                        <a href="/" className="text-blue-700">Forgot password</a>
                    </p>
                </form>


            </div>

        </div>

    )
}

export default Login