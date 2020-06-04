import dynamic from 'next/dynamic'

const Header = dynamic(()=> import('components/header'), { ssr: false })
const Foto = dynamic(()=> import('components/foto'), { ssr: false })
const Profile = dynamic(()=> import('components/profile'), { ssr: false })
const Skill = dynamic(()=> import('components/skill'), { ssr: false })

export default function Utama() {
    return(
        <div className="bg-white h-full my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm  shadow-2xl mx-auto">
            <Header />
            <Foto />
            <Profile />
            <Skill />
        </div>
    )
}