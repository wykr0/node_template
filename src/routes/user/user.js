const eventActions = await import('../../actions/events');
//import {body} from "koa/lib/response.js";

exports.threshold=(ctx)=>{
    try {
        const time = ctx.params
        const { event_id, context, metadata, timestamp } = ctx.request.body;
        if(!event_id || !context || !metadata || !timestamp){
            ctx.status=400;
            ctx.body = {
                status: "NOK",
                error_message: "One or more attributes did no came on the request"
            }
            return ctx
        }
        const result = eventActions.threshold(event_id, context, metadata, timestamp);
        
        ctx.status=200;
        ctx.body ={
            status: 200,
            data: result
            }
            return ctx
    }catch (e) {
        ctx.status=500
        ctx.body=
        {
            status: "NOK",
            error_message: "INTERNAL SERVER ERROR"
        }
    }
}