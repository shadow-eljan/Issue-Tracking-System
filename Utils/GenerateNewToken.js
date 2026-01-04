import jwt from "jsonwebtoken";

export default function generateToken(_id){
    const token = jwt.sign({_id}, "secretcode",{
        expiresIn: "3D",
    });
    return token;
}