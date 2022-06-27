import Feed from "./components/Feed";
import'./styles.css'


export default function Home(){
    return(
        <div className="Conteiner">
            <div className="Conteudo">
                <Feed></Feed>
            </div>
        </div>
    );
}