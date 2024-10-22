import { type LogisticsTable } from "@prisma/client";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Logistics({logistics}:{logistics: LogisticsTable[]}){
     return (
       <section className="grid grid-cols-2 justify-center gap-8">
         {logistics?.map((comapany, index) => (
           <motion.div
             key={comapany.id}
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             className="group flex h-max w-60 cursor-pointer flex-col items-start justify-center gap-4 rounded-lg bg-white p-4"
             // onClick={} Open dialogue wrap all of these in compoenent
           >
             <div className="relative h-48 w-full overflow-hidden rounded-lg hover:bg-black/10">
               <Image
                 src={comapany.img}
                 className="transform object-cover transition-transform duration-300 group-hover:scale-125"
                 fill
                 alt={comapany.name}
               />
             </div>

             <div>
               <p className="font-bold">{comapany.name}</p>
               <p className="text-sm text-black/60">{comapany.location}</p>
               {/* Add rating and average price */}
             </div>
           </motion.div>
         ))}
       </section>
     );
}