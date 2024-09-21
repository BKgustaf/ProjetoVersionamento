const diasDaSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
const estudos = {
  'Segunda-feira': { manha: '', tarde: '', noite: '' },
  'Terça-feira': { manha: '', tarde: '', noite: '' },
  'Quarta-feira': { manha: '', tarde: '', noite: '' },
  'Quinta-feira': { manha: '', tarde: '', noite: '' },
  'Sexta-feira': { manha: '', tarde: '', noite: '' },
  'Sábado': { manha: '', tarde: '', noite: '' },
  'Domingo': { manha: '', tarde: '', noite: '' }
};
function adicionarAtividade() {
    const dia = document.getElementById('dia').value;
    const periodo = document.getElementById('periodo').value;
    const atividade = document.getElementById('atividade').value;
    
    if (!atividade) return;
  
    estudos[dia][periodo] = atividade;
    document.getElementById('atividade').value = ''; // Limpar o campo
  
    atualizarEstudos();
  }
  function atualizarEstudos() {
  const container = document.getElementById('estudos');
  container.innerHTML = ''; // Limpar antes de redesenhar

  diasDaSemana.forEach(dia => {
    const diaDiv = document.createElement('div');
    diaDiv.classList.add('dia-container');

    const h2 = document.createElement('h2');
    h2.textContent = dia;
    diaDiv.appendChild(h2);

    const manhaDiv = document.createElement('div');
    manhaDiv.classList.add('periodo-container');
    manhaDiv.innerHTML = `<strong>Manhã:</strong> ${estudos[dia].manha}`;
    diaDiv.appendChild(manhaDiv);

    const tardeDiv = document.createElement('div');
    tardeDiv.classList.add('periodo-container');
    tardeDiv.innerHTML = `<strong>Tarde:</strong> ${estudos[dia].tarde}`;
    diaDiv.appendChild(tardeDiv);

    const noiteDiv = document.createElement('div');
    noiteDiv.classList.add('periodo-container');
    noiteDiv.innerHTML = `<strong>Noite:</strong> ${estudos[dia].noite}`;
    diaDiv.appendChild(noiteDiv);

    container.appendChild(diaDiv);
  });
}

atualizarEstudos();
