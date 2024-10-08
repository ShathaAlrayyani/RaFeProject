import { NextResponse } from "next/server"

const BASE_URL = "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Data/ra_production.json"

export async function GET() {
    const res = await fetch(BASE_URL)

    const data = await res.json()

    return NextResponse.json(data)
} 