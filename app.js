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