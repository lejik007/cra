import {useDispatch, useStore} from "react-redux";
import Goal2Slice from "../../../../store/slice/GoalStep2";
import {useState} from "react";

export default function GoalStep2() {
    const dispatch = useDispatch();
    const storeHistory = useStore()
    const [wish, setWish] = useState("")
    return (
        <div className="GoalStep2">
            <h2>Шаг 2. Определение целей для стратегического среднесрочного периода (5 лет).</h2>
            <p className="regular-text">
                Представьте себе, что Вам осталось жить 5 лет. Необходимо написать всё, что Вы <b>желали бы получить
                или достичь</b> и Вам <b>необходимо получить или реализовать</b>. Выполните это за десять минут.
            </p>
            <p className="regular-text">
                Я желал бы получить или достичь следующее
            </p>
            <textarea className="user-text__input" onChange={ el => setWish(el.target.value) }/>
            <p className="regular-text">
                Мне необходимо получить или реализовать следующее
            </p>
            <textarea id="GoalStep2-text__need" className="user-text__input" value={wish}/>
            <br/>
            <br/>
            <input className="GoalStep2__save-button" type="button" onClick={() => {
                console.log("before: ", storeHistory.getState())
                dispatch(Goal2Slice.actions.saveGoal2Wish(wish))
                console.log("after: ", storeHistory.getState())
            }} value="Сохранить"/>
        </div>
    );
}