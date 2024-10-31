import axios from "axios";
import { useEffect, useState } from "react";
import './Styles/Style.css';


const Livros = () => {
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Usar o useEffect para buscar os livros
    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await axios.get('http://localhost:3000/livros');
                setLivros(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchLivros(); // Chamar a Função para buscar livros
    }, []); // O array vazio significa que o useEffect roda apenas uma vez, quando o componente é montado

    // Mensagens de carregamento e erro
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Ocorreu o erro: {error.message}</p>;

    // Renderização dos livros
    return (
        <div className="containerLivros">
            <div className="livrosSessao">
                <table>
            <h1>Lista de Livros</h1>
            <ul>
                <tr>
                    <td>
                {livros.map(livro => (
                    <li  key={livro.id}>{livro.livro}</li> // Corrigido aqui
                ))}
                </td>
                </tr>
            </ul>
            <button className="btn-adc">Adicionar</button>
            </table>
            </div>
        </div>
    );
};

export default Livros;
