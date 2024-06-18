export function GET(request,{params}){
    return Response.json({
        name:"warut",
        major:"IT",
        Lv:"3",
        id: params.id
    });
}