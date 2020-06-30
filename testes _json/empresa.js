const getEmpresa = async() => {
    const dados = await fetch('./json/empresa.json');
    const json = dados.json();
    return json;
}


const maioresSalarios = funcionarios => {    
    const maiorSalario = Math.max(...funcionarios.map(func => func.salario));
    return funcionarios
    .filter(func => func.salario == maiorSalario)
    .map(func => func.nome)
    .join(', ');
}

const areaSalarioGasto = (areas, funcionarios) => 
    areas
    .map(area => 
        `Custo com salário na área de ${area.nome}: ${funcionarios
        .filter(func => func.area == area.id)
        .map(func => func.salario)
        .reduce((ant, prox) => ant + prox)}
        `).join(', ')

const mediaSalarioPorArea = (areas, funcionarios) => {
    return areas.map(area =>{
        const qntdFuncArea = funcionarios.filter(func => func.area == area.id).length;
        return `Salario medio em ${area.nome}: ${funcionarios
        .filter(func => func.area == area.id)
        .map(func => func.salario)
        .reduce((ant, prox) => ant + prox)}`
    }).join(', ')
}
            

getEmpresa()
.then(json => {
    const {funcionarios, areas} = json;    
    
console.log(`Maiores salarios: ${maioresSalarios(funcionarios)}`);
console.log(`${areaSalarioGasto(areas, funcionarios)}`);
console.log(mediaSalarioPorArea(areas, funcionarios));
 
 
    
})
