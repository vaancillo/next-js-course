import { NextResponse } from "next/server"

export function GET() {
  return NextResponse.json({
    message: "obteniendo datos!"
  })
}

export function POST() {
  return NextResponse.json({
    message: "creando datos!"
  })
}

export function PUT() {
  return NextResponse.json({
    message: "actualizando datos!"
  })
}

export function DELETE() {
  return NextResponse.json({
    message: "eliminando datos!"
  })
}