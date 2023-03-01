// DATOS DE MIS EXPERICIAAS
const experienciasLaborales = [
    {
        nombre: 'Club Tablada',
        fecha: '11/2021 - 07/2022',
        puesto: 'Encargado',
        labores: ['atencion al cliente', 'apertura y cierre de caja ', 'agenda telefonica', 'repocicion de productos'],
        contacto: '351-3556677'
    },
    {
        nombre: 'Espacio Productivo Upa',
        fecha: '10/2022 - 02/2024',
        puesto: 'Encargado',
        labores: ['Apertura y cierre de caja', 'Atencion al cliente'],
        contacto: '351-3678890'
    },
    {
        nombre: 'Acompañante terapeutico',
        fecha: '10/2022 - 02/2023',
        puesto: 'Acompañante',
        labores: ['Acompañar', 'Seguimiento de paciente', 'Entrega de parte diario al psicologo a cargo '],
        contacto: '351-3678890'
    },
]


// DATOS DE MIS HABILIDADES
const habilidadesBlandas = [
    {
        titulo: 'Comunicación efectiva',
        porcentaje: '25'
    },
    {
        titulo: 'Organización',
        porcentaje: '70'
    },
    {
        titulo: 'Atencion al Cliente',
        porcentaje: '80'
    },
    {
        titulo: 'Resiliencia',
        porcentaje: '70'
    },
]



// LOOP DE MIS EXPERIENCIAS //////////////////
const misExperiencias = document.getElementById('misExperiencias')
experienciasLaborales.forEach((exp)=>{
    let li = document.createElement("div")

    li.innerHTML = `<div class="col-12">
    <div class="row">
        <div class="col-2 fechas">
            ${exp.fecha}
        </div>
        <div class="col-10 descripcion" title="${exp.contacto}">
            <b class="px-3">${exp.nombre}</b>
            <small>${exp.puesto}</small>
            <ul>
                ${exp.labores.map(lab => '<li>'+lab+'</li>').join('')}
            </ul>
        </div>
    </div>
    </div>`;
    misExperiencias.appendChild(li);
  })



// LOOP DE MIS HABILIDADES //////////////////
const misHabilidades = document.getElementById('misHabilidades')
habilidadesBlandas.forEach((blan)=>{
    let li = document.createElement("div");
    li.innerHTML = `<div class="dato px-3 py-2">
    ${blan.titulo}:
        <div class="progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-white" style="width: ${blan.porcentaje}%"></div>
        </div>
    </div> `;
    misHabilidades.appendChild(li);
  })