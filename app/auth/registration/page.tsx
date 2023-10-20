import AuthButton from "@/app/components/Button"
export default function RegistrationPage(){
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl mb-7">Регистрация</h1>
            <form action="POST" className="flex flex-col gap-4 w-96">
                <input className="p-2 mb-2 text-sm font-medium text-gray-900  border-2 border-black" type="text" placeholder="Имя" />
                <input className="p-2 mb-2 text-sm font-medium text-gray-900  border-2 border-black" type="" placeholder="Номер телефона" />
                <input className="p-2 mb-2 text-sm font-medium text-gray-900  border-2 border-black" type="email" placeholder="Почта" />
                <AuthButton styles="font-sans font-medium text-white hover:bg-violet-500 bg-violet-600 p-2 w-full my-2 rounded-md text-lg" 
                    title="Зарегистрироваться"/>
            </form>
        </div>
    )
}