// Basic test to check if ngrok is forwarding requests
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    console.log("Test webhook received");
    return new NextResponse("Test webhook received", { status: 200 });
}
