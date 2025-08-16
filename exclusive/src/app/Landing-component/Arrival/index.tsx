'use client';


import Image from "next/image";


export default function Arrivals() {
 return (
   <main className="bg-white w-3/4 m-auto mr-25 mt-15">
     <div className="grid grid-cols-2 gap-6 max-w-6xl w-full">
       {/* Left big card */}
       <div className="relative rounded-lg overflow-hidden bg-black h-[420px]">
         <Image
           src="/pics/playstation.jpg"
           alt="PlayStation 5"
           layout="fill"
           objectFit="cover"
           className="z-0"
           priority
         />
         <div className="absolute left-6 bottom-6 z-10 text-white">
           <h2 className="text-xl font-semibold mb-2">PlayStation 5</h2>
           <p className="mb-4 text-sm">
             Black and White version of the PS5<br />coming out on sale.
           </p>
           <button className="border-b border-white text-white text-base font-medium pb-1 hover:opacity-80">
             Shop Now
           </button>
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
       </div>


       {/* Right column */}
       <div className="flex flex-col gap-6 h-[420px]">
         {/* Top card */}
         <div className="relative rounded-lg overflow-hidden bg-black flex-1 min-h-[190px]">
           <Image
             src="/pics/girl.jpg"
             alt="Women's Collections"
             layout="fill"
             objectFit="cover"
             className="z-0"
             priority
           />
           <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white">
             <h2 className="text-xl font-semibold mb-2">Women’s Collections</h2>
             <p className="mb-4 text-sm w-[260px]">
               Featured woman collections that<br />give you another vibe.
             </p>
             <button className="border-b border-white text-white text-base font-medium pb-1 hover:opacity-80">
               Shop Now
             </button>
           </div>
           <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-transparent z-5" />
         </div>
         {/* Bottom cards */}
         <div className="flex gap-6 flex-1 min-h-[190px]">
           {/* Speakers */}
           <div className="relative rounded-lg overflow-hidden bg-black flex-1 min-w-0">
             <Image
               src="/pics/speaker3.png"
               alt="Speakers"
               layout="fill"
               objectFit="cover"
               className="z-0"
               priority
             />
             <div className="absolute left-6 bottom-6 z-10 text-white">
               <h2 className="text-xl font-semibold mb-2">Speakers</h2>
               <p className="mb-4 text-sm">Amazon wireless speakers</p>
               <button className="border-b border-white text-white text-base font-medium pb-1 hover:opacity-80">
                 Shop Now
               </button>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
           </div>
           {/* Perfume */}
           <div className="relative rounded-lg overflow-hidden bg-black flex-1 min-w-0">
             <Image
               src="/pics/gucci.png"
               alt="Perfume"
               layout="fill"
               objectFit="cover"
               className="z-0"
               priority
             />
             <div className="absolute left-6 bottom-6 z-10 text-white">
               <h2 className="text-xl font-semibold mb-2">Perfume</h2>
               <p className="mb-4 text-sm">GUCCI INTENSE OUD EDP</p>
               <button className="border-b border-white text-white text-base font-medium pb-1 hover:opacity-80">
                 Shop Now
               </button>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-5" />
           </div>
         </div>
       </div>
     </div>
   </main>
 );
}

