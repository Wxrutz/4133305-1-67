import { PrismaClient } from "@prisma/client";
import { hash,hashSync } from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req){
try{
    const {email,name,password} = await req.json()
    const hashedAPassword = hashSync(password,10);

    const newUser = await prisma.user.create({
        data: {
            email,
            name,
            password : hashedAPassword,
        },

    });
    
    return Response.json({
        msg: "User Create !!",
        newUser,
        
    });
}catch (err){
    return Response.json(err,{status:500});
}
}