let data = [] //base de dato
let id = 0

export.threshold =(event_id, context, metadata, timestamp)=> {
    const temp = { //Variable temporal (Muy posiblemente inecesaria)
        event_id : event_id,
        context : context,
        metadata : metadata,
        timestamp : timestamp
    }

    data.forEach(element => { //revisa los elementos de data
        if(element.incidents.some(incident => incident.metadata === metadata)){ 
            element.incidents.push[temp]
        }

        else{
            const incident = {
                incident_id : id,
                incidents : [temp]
            }
            data.push(incident)
            id = id + 1
        }
    });
    return bd
}
