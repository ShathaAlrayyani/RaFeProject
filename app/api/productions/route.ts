import { NextResponse } from "next/server"
import data from '../../constants/productions.json'

export async function GET() {
    return NextResponse.json(data)
} 