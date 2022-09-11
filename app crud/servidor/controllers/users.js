var usuarios = []
var id = 1
export async function getUser(req, res) {
    const id = req.query.id
    for (let u of usuarios) {
        if (u.id == id) {
            return res.send(u)
        }
    }
    return res.send('Usuario no encontrado')
}

export async function postUser(req, res) {
    const usuario = req.body
    console.log(usuario)
    usuario.id = id++
    usuarios.push(usuario)
    return res.status(200).send()
}

export async function deleteUser(req, res) {
    const id = req.query.id
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id == id) {
            console.log('Eliminando a: ' , usuarios[i])
            usuarios.splice(i, 1)
            return res.send('Usuario eliminado')
        }
    }
    return res.send('El usuario no existe')
}


