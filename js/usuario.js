let form = document.getElementById('form');
let url = 'https://dbusuarios.herokuapp.com/usuario';
const formLogin = document.getElementById('formLogin');

// POST-------------------------------------------------

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let nombreUsuario = document.getElementById('useName').value;
    let correo = document.getElementById('email').value;
    let password = document.getElementById('password').value;
   
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            nombreUsuario,
            correo,
            password 
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    
      Swal.fire({
        icon: 'success',
        title: 'ok...',
        text: 'Gracias por registrarse',
      }).then(function() {
        window.location = "../index.html";
    });
    
});

const getUsuarios = async() => {
    let nameUsuario = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;

    //manejo de errores con try catch
    try{
    const peticion = await fetch(url);
    const datos = await peticion.json();

    let validation = true;
    
    datos.map(resultData => {
        //esto es un decostrucion
    const {nombreUsuario, correo, password} = resultData;

        if(nameUsuario === nombreUsuario && pass === password){
            
            validation = false;
            
        }
          
    });

    if(validation){
        //alert('usuario incorrecto');
        Swal.fire('Usuario incorrecto')
    }
    else
    {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'bienvenido',
            showConfirmButton: false,
            timer: 1000
          }).then(function() {
            window.location = "../home.html";
        });
    }

    }catch (error){
        alert(error);
    }
}

formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    getUsuarios();
});