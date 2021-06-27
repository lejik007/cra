import Goal1Slice  from "./slice/GoalStep1";
import Goal2Slice  from "./slice/GoalStep2";
import Goal3Slice  from "./slice/GoalStep3";
import Goal4Slice  from "./slice/GoalStep4";
import Goal5Slice  from "./slice/GoalStep5";
import Goal6Slice  from "./slice/GoalStep6";
import Goal7Slice  from "./slice/GoalStep7";
import {combineReducers} from "redux";

const reducer = combineReducers({
    Goal1Name: Goal1Slice.reducer,
    Goal2Name: Goal2Slice.reducer,
    Goal3Name: Goal3Slice.reducer,
    Goal4Name: Goal4Slice.reducer,
    Goal5Name: Goal5Slice.reducer,
    Goal6Name: Goal6Slice.reducer,
    Goal7Name: Goal7Slice.reducer,
    })

export default reducer