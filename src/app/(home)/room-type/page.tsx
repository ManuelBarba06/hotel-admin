"use client"

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

import TitleText from '@/components/TitleText/TitleText'

import TableAction from "@/components/TableAction/TableAction";


const page = () => {
    
  return (
    <main>
            <TitleText
                title='Tipos de cuartos'
            />
           <TableAction/>
    </main>
  )
}

export default page
