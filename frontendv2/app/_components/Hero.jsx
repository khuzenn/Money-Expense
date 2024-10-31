import React from 'react'

function Hero() {
  return (
    <section className="relative bg-[url('/background-chart.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/80 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900/90 sm:to-gray-900/50"></div>

        <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl text-center sm:text-left">
                <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                    Let s manage your expense<strong className="block font-extrabold text-primary"> Control Your Money. </strong>
                </h1>

                <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                    Start creating your budget and save ton of money
                </p>

                <div className="mt-8 flex flex-wrap px-24 sm:px-0 justify-center sm:justify-start">
                    <a
                    href="#"
                    className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
                    >
                    Get Started
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero