import symptom from '../assets/symptom-bg.svg'
export default function Symptoms(){
    return (
         <>
            <div className="symptom header-text">
            <span>Covid-19</span>
                <h1>Symptomps</h1>
                <p>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory</p>
            </div>
            <img src={symptom} alt="" />
         </>

    );
}