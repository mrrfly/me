export default function Foto() {
    return(
        <div>
            <div className="relative h-40">
                <img alt="Background" className="absolute h-full w-full object-cover" src="/bg2.webp" />
            </div>
            <div className="relative shadow mx-auto h-48 w-48 -my-12 border-white rounded-full overflow-hidden border-4">
                <img alt="Foto Profile" className="object-cover w-full h-full" src="/me2.jpeg" />
            </div>
        </div>
    )
}