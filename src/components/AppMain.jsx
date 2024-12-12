import style from "./AppMain.module.css"

function AppMain() {

    return (
        <main >
            <div className={style.card}>
                <div className={style.square}></div>
                <section className="pad">
                    <div className={style.postTitle}>Titolo del Post</div>
                    <div className="mb">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex fuga rerum est quis. Pariatur quod maiores ducimus odit culpa in perferendis minus doloremque, vero exercitationem similique asperiores, praesentium suscipit.</div>
                    <button className={style.btn}>LEGGI DI PIÚ</button>
                </section>
            </div>

        </main>
    )
}

export default AppMain;