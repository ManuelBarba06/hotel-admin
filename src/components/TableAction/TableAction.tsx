import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React from 'react'

const TableAction = () => {
  return (
    <Table
    isStriped
    selectionMode="multiple"
    aria-label="Example static collection table"
    >
        <TableHeader>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Precio</TableColumn>
            <TableColumn>Descripción</TableColumn>
        </TableHeader>
        <TableBody>
            <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
            </TableRow>
        </TableBody>
    </Table>
  )
}

export default TableAction