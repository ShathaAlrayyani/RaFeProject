import { NextResponse } from "next/server"
import data from '../../constants/tvCommercials.json'

export async function GET() {
    return NextResponse.json(data)
}