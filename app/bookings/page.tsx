// import { getServerSession } from "next-auth"
// import Header from "../_components/header"
// import { db } from "../_lib/prisma"
// import { notFound } from "next/navigation"

// const Bookings = async () => {
//   const session = await getServerSession(authOptions)
//   if (!session.user) {
//     notFound()
//   }

//   const bookings = await db.booking.findMany({
//     where: {
//       userId: (session?.user as any).id,
//     },
//   })

//   return (
//     <>
//       <Header />
//       <div className="p-5">
//         <h1 className="text-xl font-bold">Agendamentos</h1>
//       </div>
//     </>
//   )
// }

// export default Bookings
