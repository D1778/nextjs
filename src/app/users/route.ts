import { request } from "http";
import { headers } from "next/dist/server/request/headers";

type User = { id: number; name: string };
export const users: { [key: number]: User } = {
    1: { id: 1, name: "John Doe" },
    2: { id: 2, name: "Jane Smith" },
    3: { id: 3, name: "Alice Johnson" },
};

export async function GET() {
  return Response.json(users);
}
export async function POST(request:Request){
    const user=await request.json();
    const newId = Math.max(...Object.keys(users).map(Number)) + 1;
    const newUser = {
        id: newId,
        name: user.name,
    };
    users[newId] = newUser;
    return new Response(JSON.stringify(newUser),
    { headers: { "Content-Type": "application/json" }, status: 201 });
}

