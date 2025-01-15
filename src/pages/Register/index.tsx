import Template from "../../template";
import {NavLink} from "react-router";

const Register = () => {
    return (
        <Template stripActive={false}>
            <main className='flex flex-col items-center justify-center pt-20'>
                <form className="max-w-sm mx-auto bg-white px-20 py-10 rounded-2xl">
                    <h1 className='font-anton uppercase text-2xl mb-8'>
                        Registre-se
                    </h1>
                    <div className="mb-5">
                        <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 ">
                            Nome
                        </label>
                        <input type="nome" id="nome"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="john doe" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                            Email
                        </label>
                        <input type="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               placeholder="name@flowbite.com" required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-900 ">
                            Senha
                        </label>
                        <input type="password" id="password"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                               required/>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <NavLink to="/login" className="text-blue-700 text-sm font-medium">Ja possui conta?
                            Faça login!</NavLink>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Registrar
                    </button>
                </form>

            </main>
        </Template>
    );
};

export default Register;