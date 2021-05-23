import Header from '/src/components/Header';

export default function Begin() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <h1>Цель</h1>
                <p>
                    Зафиксируйте наименование цели и обоснование необходимости её достижения.
                </p>
                <br/>
                <p>
                    Наименование цели:
                </p>
                <br/>
                <input type="text"/>
                <br/>
                <p>
                    Обоснование необходимости достижения цели:
                </p>
                <br/>
                <input type="text"/>
            </main>
        </div>
    );
}