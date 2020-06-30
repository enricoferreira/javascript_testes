const empresa = {
    funcionarios: [        
            {
                "id": 1,
                "nome": "Paulo Nunes",
                "salario": 10000.00,
                "area": 2
            },
            {
                "id": 2,
                "nome": "Oseinha da Bahia",
                "salario": 20000.00,
                "area": 2
            },
            {
                "id": 3,
                "nome": "Klebão",
                "salario": 30000.00,
                "area": 1
            },
            {
                "id": 4,
                "nome": "Alex",
                "salario": 40000.00,
                "area": 1
            },
            {
                "id": 5,
                "nome": "Zinho",
                "salario": 50000.00,
                "area": 1
            },
            {
                "id": 6,
                "nome": "Arce",
                "salario": 60000.00,
                "area": 1
            },
            {
                "id": 7,
                "nome": "Marcos",
                "salario": 100000.00,
                "area": 4
            },
            {
                "id": 10,
                "nome": "Rogerio",
                "salario": 100000.00,
                "area": 3
            },
            {
                "id": 8,
                "nome": "Roque Junior",
                "salario": 80000.00,
                "area": 3
            },
            {
                "id": 9,
                "nome": "Cesar Sampaio",
                "salario": 90000.00,
                "area": 4
            }            
    ],
    areas:[
        {
            "id": 1,
            "nome": "Desenvolvimento"
        },
        {
            "id": 2,
            "nome": "Teste"
        },
        {
            "id": 3,
            "nome": "Suporte"
        },
        {
            "id": 4,
            "nome": "Diretoria"
        }
    ]
}
    
const funcionariosComSalario = ({funcionarios}, valor, condicao = 3) => {
    return funcionarios.filter(func => {
        if(condicao == 1){
            if(func.salario > valor){
                return func;
            }
        }else if(condicao == 2){
            if(func.salario < valor){
                return func;
            }
        }else if(condicao == 3){
            if(func.salario == valor){
                return func;
            }
        }
    }).map(func => func.nome).join(', ');
}

const areasSalario = ({funcionarios, areas})=>
    areas.map(area => {
        return `${area.nome}: ${funcionarios
        .filter(func => func.area == area.id)
        .map(func => func.salario)
        .reduce((atual, prox) => atual + prox).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}
        `
    })

const areaUnicaSalario = ({funcionarios, areas}, areaNome) =>{
    const idArea = areas.filter(area => area.nome == areaNome).map(area => area.id);
    return funcionarios
    .filter(func => func.area == idArea)
    .map(func => func.salario)
    .reduce((atual, prox) => atual + prox, 0)
}

const mediaSalario = ({funcionarios, areas}) =>{
    areas.map(area => {
        const qntFuncionariosArea = funcionarios.filter(func => func.area == area.id).length;
        console.log(`Média salarial ${area.nome}: ${(areaUnicaSalario(empresa, area.nome)/qntFuncionariosArea).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })}`);
        
    })
    }
console.log(`Funcionarios com salário superior à 50000: ${funcionariosComSalario(empresa, 50000, 1)}`);
console.log(`Salario gasto por areas: ${areasSalario(empresa)}`);
console.log(`Salario gasto pela area de desenvolvimento: ${areaUnicaSalario(empresa, 'Desenvolvimento').toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})}`);
mediaSalario(empresa);

