import ProfileSidebar from "@/components/Profile/ProfileSidebar"

export default function Layout({ children }) {
    return (
        <section className="min-h-screen  flex flex-row gap-10 justify-center items-start mt-35">

            <div className=" p-5 border-2 border-zinc-300 w-1/2">
                {children}
            </div>

            <div className="relative ">
                <ProfileSidebar />
            </div>

        </section>
    )
}


