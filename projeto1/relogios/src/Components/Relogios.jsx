import { useEffect, useState } from "react"

function Relogios(){
    const [horaAtual, setHoraAtual] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => {
          setHoraAtual(new Date());
        }, 1000);
    
        return ()=> clearInterval(timerId)
    },[])
    const formatarHora = (data) => {
        const horas = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        const segundos = String(data.getSeconds()).padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
      };
    return(
        <div className="relogioBorda">
            <div className="relogioInterno">
                {formatarHora(horaAtual)}
            </div>
        </div>
    )
}
export default Relogios