import React, {useState, useEffect} from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from "firebase/firestore";

type MainSectionProps = {
    
};


const MainSection:React.FC<MainSectionProps> = () => {

    const [language, setLanguage] = useState([])

    useEffect(() => {

        const getData =async () => {
            const querySnapshot = await getDocs(collection(db, "languages"));
                querySnapshot.forEach((doc) => {
                setLanguage({...doc.data()});
                });
        }
        getData()
    
    }, [])
    
    
    return (
        <section className=' w-2/3 bg-white m-3'>
            <nav> 
                {/* {language.map((el) => <a href={el.link}> {el.name}</a>)} */}
            </nav>
            <section>
                This is rest of the content
            </section>
        </section>
    )
}
export default MainSection;