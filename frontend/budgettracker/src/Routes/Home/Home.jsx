import styles from './Home.module.css';
import Card from '../../Components/Card/Card';

export default function Home() {
    return (
        <div className={styles.homeBody}>
            <h1>Home</h1>
            <div className={styles.cards}>
                <h2>Vedd kezedbe pénzügyeidet egyszerűen!</h2>
            </div>

            <div className={styles.cards}>
                <h3>
                    Regisztrálj másodpercek alatt.
                    <br/>
                    Rögzítsd a napi pénzmozgésodat.
                    <br/>
                    Elemezd a szokásaidat és spórolj!
                </h3>
            </div>

            <div className={styles.cards}>
                <Card title={"A BudgetTrackerről"} content={{p1:"A BudgetTracker egy olyan alkalmazás, ami segít megkönnyíteni a pénzügyi döntéseinek meghozását. Átláthatóvá tesszük pénzének mozgását, segítünk Önnek számon tartani illetve hogy mire és mennyit költött.", p2:""}}></Card>
                <div className={styles.gap}></div>
                <Card title={"Mit kínálunk?"} content={{li1:"Pénzmozgások rögzítése és kezelése", li2:"Valós idejű egyenlegszámítás", li3:"Pénzügyi statisztikák", li4:"Tartós és visszakereshető tranzakciótörténet"}}></Card>
            </div>
            <p>In pharetra nunc ante. Curabitur convallis, nunc a sagittis auctor, sem ante posuere velit, eget vestibulum felis ipsum sit amet lacus. Aenean ex urna, consequat vestibulum porta sit amet, dapibus id nisl. Morbi accumsan volutpat nulla, in venenatis quam lobortis at. Curabitur in nulla sit amet quam rhoncus egestas eget in enim. Sed mollis tristique purus, ac varius neque pellentesque in. Ut faucibus sit amet dui quis vehicula. Ut enim lectus, pharetra eu lobortis at, blandit sit amet arcu. Suspendisse dignissim, lorem ut sollicitudin hendrerit, risus tortor dictum odio, posuere molestie arcu ligula vitae mi. Proin non luctus libero. Quisque suscipit felis a ultricies tristique. Nunc tristique sodales enim a efficitur. Nulla commodo justo dui, nec eleifend mauris sodales sit amet. Aenean diam neque, vestibulum quis feugiat eu, pretium et tellus.</p>
            <p>Etiam eleifend feugiat dui non placerat. Nam consequat sem at interdum scelerisque. Aliquam euismod leo imperdiet pretium euismod. Nulla rutrum metus scelerisque massa ornare, eget lobortis odio ornare. Duis odio nunc, malesuada ut imperdiet eu, dignissim vel lacus. Mauris et ipsum ut urna luctus vestibulum a vitae sem. Pellentesque laoreet venenatis aliquet.</p>
            <p>asd asd asdasd sad sasdsa dsdssad sadsadsd sad asd asdasdsadjsandjkn adkjsndjskadbvdhvasd asduiasgbduajsibgvzsddef fbgeuzg fuzesg fzesfegszufgesf bsuefzfgzduvbdscndsf ebnfjhesgbfd uzdsf ds bfsb dufhzbesfhjbsd fsdf</p>
            <p>asd asd asdasd sad sasdsa dsdssad sadsadsd sad asd</p>
            <p>Donec ac quam nec lectus ultrices elementum sit amet vel tortor. Proin eu accumsan arcu. Cras ultrices ligula vel ligula scelerisque, vel sollicitudin est interdum. Aliquam eleifend, elit quis rhoncus ullamcorper, dolor sem ultricies arcu, vel facilisis ipsum nisl nec lacus. Nunc metus augue, elementum at turpis et, dictum gravida ante. Aliquam erat volutpat. Curabitur convallis felis eu velit euismod, id viverra nulla dignissim. Pellentesque molestie lacinia sem, nec lacinia lorem scelerisque et. Praesent ac rutrum ipsum. Vestibulum laoreet tortor odio, at tempor elit pretium sit amet. Cras dignissim facilisis augue eget blandit.</p>
            <p>asd asd asdasd sad sasdsa dsdssad sadsadsd sad asd</p>
            <p>asd asd asdasd sad sasdsa dsdssad sadsadsd sad asd asdasdsadjsandjkn adkjsndjskadbvdhvasd asduiasgbduajsibgvzsddef fbgeuzg fuzesg fzesfegszufgesf bsuefzfgzduvbdscndsf ebnfjhesgbfd uzdsf ds bfsb dufhzbesfhjbsd fsdf</p>
            <p>asd asd asdasd sad sasdsa dsdssad sadsadsd sad asd</p>
            <p>asd asd asdasd sad sasdsa dsdssad sadsadsd sad asd asdasdsadjsandjkn adkjsndjskadbvdhvasd asduiasgbduajsibgvzsddef fbgeuzg fuzesg fzesfegszufgesf bsuefzfgzduvbdscndsf ebnfjhesgbfd uzdsf ds bfsb dufhzbesfhjbsd fsdf</p>
        </div>
    )
}