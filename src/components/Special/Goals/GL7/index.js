import {useDispatch, useStore} from "react-redux";
import Goal7Slice from "../../../../store/slice/GoalStep7";
import {useState} from "react";

export default function GoalStep7() {
    const dispatch = useDispatch()
    const storeHistory = useStore()
    const [wish, setWish] = useState()
    return (
        <div className="GoalStep7">
            <h2>Шаг 5. Определение целей для тактического микропериода (1 неделя).</h2>
            <p className="regular-text">
                Представьте себе, что Вам осталось жить 1 неделю. Необходимо написать всё, что Вы <b>желали бы получить
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
            <input className="GoalStep7__save-button" type="button" onClick={() => {
                console.log("before: ", storeHistory.getState())
                dispatch(Goal7Slice.actions.saveGoal7Wish(wish))
                console.log("after: ", storeHistory.getState())
            }} value="Сохранить"/>
        </div>
    );
}