import React from 'react'
import Link from "next/link";

const Maintenance = () => {
    return (
        <main className="">
            <section mt-4>
                <div className="flex items-center justify-center ">
                    <div>
                        <img src="./images/maintenance1.png" alt="maintenance" width="100%" height="100%" />
                    </div>
                </div>
            </section >
            <section className="mt-6">
                <div className="items-center justify-center text-center ">
                    <h1 className="text-7xl mt-4">Portfolio Under <br/>Maintenance</h1>
                    <p className="mt-4 px-2 py-2 text-2xl">This portfolio is currently being updated. <br/>Please check back soon!</p>
                </div>
                <div className="flex items-center justify-center px-2 py-2 items-col-2 w-full">

                </div>
                <div className="flex items-center justify-center px-2 py-2 items-col-2 w-full">
                    <Link className="border-2 border-cyan-50 rounded-lg py-1 px-4 mr-2 bg-amber-500 h-[35px]" href="mailto:dukev1989@gmail.com" target="_blank" >Contact Me</Link>
                    <Link className="border-2 border-cyan-50 rounded-lg py-1 px-4 bg-amber-500 h-[35px]" href="https://www.linkedin.com/in/venzonariola/" target="_blank">LinkedIn</Link>
                </div>

            </section>
        </main>

    )
}
export default Maintenance
