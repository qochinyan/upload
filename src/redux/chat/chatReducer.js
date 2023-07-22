export const reducer = (state={},action)=>{
    switch(action.type){
        case "CLOSE_CHAT" :
            return {...state,open:false   }  
        case "OPEN_CHAT" : 
            return {...state,open:true     }  
        default : return state
    }
}  