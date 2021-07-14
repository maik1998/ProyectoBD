/*const formulario = document.getElementById('formLogin');
const inputs = document.querySelectorAll('#formLogin input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\@\.\_\-]{4,16}$/ //Letras,numeros,punto,guion,guion bajo
}

const campos={
    usuario: false,
    password: false
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                campos['usuario']=true
            }
        break
        case "password":
            campos['password']=true

    }
}


inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
});


formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (campos.usuario && campos.password){
            console.log(document.getElementById('usuario').value)
        }
});*/

$('#formLogin').submit(function(e) {
    e.preventDefault()
    const usuario=$.trim($("#usuario").val());    
    const password=$.trim($("#password").val());

    if(usuario.length == "" || password == ""){
        Swal.fire({
            type:'warning',
            icon: 'warning',
            title:'Debes ingresar un usuario y/o password',
        });
        return false; 
    }else{
        $.ajax({
            url:"bd/login.php",
            type:"POST",
            datatype: "json",
            data: {usuario:usuario, password:password}, 
            success:function(data){               
                if(data == "null"){
                    Swal.fire({
                        type:'error',
                        icon: 'error',
                        title:'Usuario y/o password incorrecto',
                    });
                }else{
                    Swal.fire({
                        type:'success',
                        icon: 'success',
                        title:'¡Conexión exitosa!',
                        confirmButtonColor:'#3085d6',
                        confirmButtonText:'Ingresar'
                    }).then((result) => {
                        if(result.value){
                            window.location.href = "dashboard/dashboard.php";
                        }
                    })
                    
                }
            }    
        });
    }
});