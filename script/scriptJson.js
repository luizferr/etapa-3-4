fetch("https://my-json-server.typicode.com/luizferr/json/clientes")
.then(response => response.json())
.then(clientes => {
    const dadosCliente = document.getElementById("dadosCliente")
    const procurarCliente = document.getElementById("procurarCliente")
    const cliente = document.getElementById("clientes")

    procurarCliente.addEventListener("submit", () => {
        clientes.forEach(element => {
            let br = "<br>"
            if(cliente.value == element.nome){
                dadosCliente.innerHTML += `
                Id: ${element.id} ${br}
                Nome: ${element.nome} ${br}
                Carro: ${element.carro} ${br}
                
                `
            }    
        });
            
            
    })
    
})




fetch("https://my-json-server.typicode.com/luizferr/json/funcionarios")
.then(response => response.json())
.then(funcionarios => {
    const dadosFuncionario = document.getElementById("dadosFuncionarios")
    funcionarios.forEach(element => {
        let br = "<br>"
        dadosFuncionario.innerHTML += `
        Id: ${element.id} ${br}
        Nome: ${element.nome} ${br}
        Cargo: ${element.cargo} ${br}
        
        `
    });
})