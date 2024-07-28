import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import language from 'datatables.net-plugins/i18n/pt-BR.mjs';

let table = new DataTable('#tabela-example', {
  // ajax: '',
  // serverSide: true,
  // processing: true,
  responsive: true,
  language,
  select: true,
  layout: {
    top3: {
      div: {
        className: 'botao',
        text: 'Titulo da Tabela pode ser aqui'
      }
    }
  }
});

