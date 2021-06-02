import {Route, Switch} from "react-router";
import Home from "../../../Pages/Home";
import InfoBlock from "../../../Pages/InfoBlock";
import GoalStepPage0 from "../../../Pages/GoalSteps/GoalStepPage0";
import GoalStepPage1 from "../../../Pages/GoalSteps/GoalStepPage1";
import GoalStepPage2 from "../../../Pages/GoalSteps/GoalStepPage2";
import GoalStepPage3 from "../../../Pages/GoalSteps/GoalStepPage3";
import GoalStepPage4 from "../../../Pages/GoalSteps/GoalStepPage4";
import GoalStepPage5 from "../../../Pages/GoalSteps/GoalStepPage5";
import GoalStepPage6 from "../../../Pages/GoalSteps/GoalStepPage6";
import GoalStepPage7 from "../../../Pages/GoalSteps/GoalStepPage7";

export default function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/InfoBlock' component={InfoBlock}/>
                <Route path='/GoalStepPage0' component={GoalStepPage0}/>
                <Route path='/GoalStepPage1' component={GoalStepPage1}/>
                <Route path='/GoalStepPage2' component={GoalStepPage2}/>
                <Route path='/GoalStepPage3' component={GoalStepPage3}/>
                <Route path='/GoalStepPage4' component={GoalStepPage4}/>
                <Route path='/GoalStepPage5' component={GoalStepPage5}/>
                <Route path='/GoalStepPage6' component={GoalStepPage6}/>
                <Route path='/GoalStepPage7' component={GoalStepPage7}/>
            </Switch>
        </main>
    );
}
