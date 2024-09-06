import { NextResponse } from "next/server"
import data from '../../constants/documentaries.json'

const BASE_URL = "https://ra-project.nyc3.cdn.digitaloceanspaces.com/Data/documentariesPrograms.json"

export async function GET() {    
    return NextResponse.json(data)
} 