export const authReducer = (state={},action)=>{
    switch(action.type){
        case "SUCCESS" :
            return {...state,authorised:true   }  
        case "FAIL" : 
            return {...state,authorised:false     }  
        default : return state
    }
}  