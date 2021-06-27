import {useDispatch, useStore} from "react-redux";
import Goal3Slice from "../../../../store/slice/GoalStep3";
import {useState} from "react";

export default function GoalStep3() {
    const dispatch = useDispatch()
    const storeHistory = useStore()
    const [wish, setWish] = useState("")
    return (
        <div className="GoalStep3">
            <h2>Шаг 3. Определение целей для стратегического краткосрочного периода (1 год).</h2>
            <p className="regular-text">
                Представьте себе, что Вам осталось жить 1 год. Необходимо написать всё, что Вы <b>желали бы получить
                или достичь</b> и Вам <b>необходимо получить или реализовать</b>. Выполните это за десять минут.
            </p>
            <p className="regular-text">
                Я желал бы получить или достичь следующее
            </p>
            <textarea className="user-text__input" onChange={ el => setWish(el.target.value)}/>
            <p className="regular-text">
                Мне необходимо получить или реализовать следующее
            </p>
            <textarea id="GoalStep3-text__need" className="user-text__input" value={wish}/>
            <br/>
            <br/>
            <input className="GoalStep3__save-button" type="button" onClick={() => {
                console.log("before: ", storeHistory.getState())
                dispatch(Goal3Slice.actions.saveGoal3Wish(wish))
                console.log("after: ", storeHistory.getState())
            }} value="Сохранить"/>
        </div>
    );
}