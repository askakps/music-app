"use client";
import { useRouter } from 'next/navigation'
import AuthButton from "../../components/Button/index"
export default function Register(){
    const router = useRouter()
    const goToPage = (page: string) => {
        router.push(`auth/${page}`)
    }
    return (
        <div className="flex flex-col items-center justify-center h-full"> 
            <div className="w-44">
                <AuthButton 
                    styles="font-sans text-white bg-green-600 p-2 w-full my-2 rounded-md text-lg" 
                    title="Login"
                    clickHandler = { () => goToPage('authorization') } />
                <AuthButton 
                    styles="font-sans text-white bg-stone-600 p-2 w-full my-2 rounded-md text-lg" 
                    title="Registration"
                    clickHandler = { () =>  goToPage('registration')}/>
            </div>
        </div>
    )
}