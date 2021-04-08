import {FETCH_POST, NEW_POST} from '../../Actions/Types'

const initialState = {
    items : [],
    item : {}
}

           const PostReducer =  (state = initialState, action) => {
        switch(action.type){
            case FETCH_POST :
                return {
                    ...state,
                    items : action.payload
                }
            case NEW_POST :
                return {
                    ...state,
                    item: action.payload 
                }
            default: 
            return state;
        }
}

export default PostReducer;

