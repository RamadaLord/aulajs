
export default function Botao() {

    function result() {
        let x = 3
        let y = 5
        let resultado = x * y
        alert(resultado)
    }

    return (
        <div>
            <button onClick={result}>Soma</button>
        </div>
    )

}
