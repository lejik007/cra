import {useDispatch, useStore} from "react-redux";
import Goal5Slice from "../../../../store/slice/GoalStep5";
import {useState} from "react";

export default function GoalStep5() {
    const dispatch = useDispatch()
    const storeHistory = useStore()
    const [wish, setWish] = useState()
    return (
        <div className="GoalStep5">
            <h2>Шаг 4. Определение целей для тактического среднесрочного периода (3 месяца).</h2>
            <p className="regular-text">
                Представьте себе, что Вам осталось жить 3 месяца. Необходимо написать всё, что Вы <b>желали бы получить
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
            <input className="GoalStep5__save-button" type="button" onClick={() => {
                console.log("before: ", storeHistory.getState())
                dispatch(Goal5Slice.actions.saveGoal5Wish(wish))
                console.log("after: ", storeHistory.getState())
            }} value="Сохранить"/>
        </div>
    );
}