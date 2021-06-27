import {useDispatch, useStore} from "react-redux";
import Goal4Slice from "../../../../store/slice/GoalStep4";
import {useState} from "react";

export default function GoalStep4() {
    const dispatch = useDispatch()
    const storeHistory = useStore()
    const [wish, setWish] = useState("")
    return (
        <div className="GoalStep4">
            <h2>Шаг 4. Определение целей для тактического долгосрочного периода (6 месяцев).</h2>
            <p className="regular-text">
                Представьте себе, что Вам осталось жить 6 месяцев. Необходимо написать всё, что Вы <b>желали бы получить
                или достичь</b> и Вам <b>необходимо получить или реализовать</b>. Выполните это за десять минут.
            </p>
            <p className="regular-text">
                Я желал бы получить или достичь следующее
            </p>
            <textarea className="user-text__input" onChange={ el => setWish(el.target.value)}/>
            <p className="regular-text">
                Мне необходимо получить или реализовать следующее
            </p>
            <textarea className="user-text__input" value={wish}/>
            <br/>
            <br/>
            <input className="GoalStep4__save-button" type="button" onClick={() => {
                console.log("before: ", storeHistory.getState())
                dispatch(Goal4Slice.actions.saveGoal4Wish(wish))
                console.log("after: ", storeHistory.getState())
            }} value="Сохранить"/>
        </div>
    );
}