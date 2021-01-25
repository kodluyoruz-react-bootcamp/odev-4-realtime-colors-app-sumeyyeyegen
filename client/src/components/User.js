import { useContext } from 'react'

import ColorContext from '../context/ColorContext'

function User() {
    const { setLogin, setUser, username, setUsername } = useContext(ColorContext);
    function handleSubmit(e) {
        e.preventDefault();
        setUser(username);
        setLogin(true);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={e => setUsername(e.target.value)} />
        </form>
    )
}

export default User;