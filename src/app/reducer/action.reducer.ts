import * as TutorialActions from '../action/action.action'
export function reducer(state =[], action: TutorialActions.Actions) {
  switch (action.type) {
    case TutorialActions.SAVE_DATA:
    return [...state,action.payload]
    // case TutorialActions.REMOVE_DATA:
    //    state.map((data)=>{
    //      console.log(data)
    //      console.log(data)
    //      for(let ele of data){
    //        if(ele.id==action.payload){
    //          console.log(ele)
    //          return [...state,ele]
    //        }
    //      }
    //   })
    default:
      return state;
  }
}
