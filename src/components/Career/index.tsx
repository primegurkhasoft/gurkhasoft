
'use client';

import dynamic from 'next/dynamic';
import React from 'react'
import  VacenciesData  from  "./careerData";

const SingleCareer = dynamic(() => import("./singleCareer"), { ssr: false });

function Career() {
    return (
        <>

            <section className=" py-8 px-4 sm:px-8  bg-[#f3fcff] ">
                <div  className='text-center'>        
                    
                    <p className="mt-5 text-base font-semibold sm:text-lg md:text-xl   ">
                        Empowering You to Build a Career That Defines Success.
                    </p>
                    <p className="mt-5 text-base sm:text-lg md:text-xl  " >Your growth and ambition are at the heart of everything we do, guiding you to reach your highest potential.</p>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold   mt-10 ml-20 ">Vacancies</h1>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:ml-36 xl:gap-10  pt-10 pb-12 px-9">
  {VacenciesData.length === 0 ? (
    <p className="text-center font-bold text-gray-500">No vacancies available</p>
  ) : (
    VacenciesData.map((vacency, key) => (
      <SingleCareer vacency={vacency} key={key} /> // ✅ Now correctly resolved
    ))
  )}
</div>

            </section>
        </>
    )
}

export default Career













