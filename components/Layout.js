import React from "react"
import Head from "next/head"
import Header from "./Header"

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>React NodeSend</title>
        <meta name="description" content="Autor: Ernesto Aguirre, Descripción: Proyecto React NodeSend (Sitio Web similar a Firefox Send), usando para el FrontEnd: Next.js, Context, Tailwind CSS, Formik, Yup, Axios, react-dropzone, y para el BackEnd: Node.js, express, MongoDB, nodemon, mongoose, dotenv, bcrypt, express-validator, shortid, multer, CORS"/>
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <Header/>
          <main className="mt-20">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout