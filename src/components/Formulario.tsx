import { useForm } from '../hooks/useForm';


interface FormData {
    email: string;
    nombre: string;
    edad: number;
}

export const Formulario = () => {

    const {email, nombre, formulario, handleChange} = useForm<FormData>({
        email: 'lennin@gmail.com',
        nombre: 'Lenin Ibarra',
        edad: 35
    });

    return (
        <form 
            autoComplete="off"
            className="mb-5"
        >
            <div>
                <label className="form-label">Nombre</label>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                    className="form-control"
                    type="email"
                    placeholder="email"
                    name="email" 
                    value={email}
                    onChange={handleChange}
                />
            </div>

            <pre className="mt-3">{JSON.stringify(formulario)}</pre>

        </form>
    )
}
