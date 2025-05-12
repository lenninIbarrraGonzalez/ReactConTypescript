import { useState } from "react";

interface User {
    uid: string;
    name: string;
}

// const tempUser:User = {
//     uid: 'slkfdjskjf',
//     name: 'Jhon Doe'
// }

export const Usuario = () => {

    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'asdasd1221',
            name: 'Lenin Ibarra'            
        });
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>

            <button
                className="btn btn-primary"
                onClick={login}
            >
                Login
            </button>

            { !user
                ? <h3>No hay usuario</h3>
                : <pre>{JSON.stringify(user, null, 3)}</pre>
            }

            
        </div>
    )
}
