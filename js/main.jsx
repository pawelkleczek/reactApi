import React from 'react';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div><div className='image'></div>
			<div className='main'>
				<h1>Witaj, świecie!</h1>
				<h2>To jest przykładowa aplikacja wykorzystująca</h2>
			<p>
				Łączy się z API dwóch serwisów: <span className='main_text-deco'><a href='https://www.themoviedb.org/' target='_blank'>themoviedb.org</a></span> i <span className='main_text-deco'><a href='http://ghibliapi.herokuapp.com' target='_blank'>ghibliapi.herokuapp.com</a></span> i listę filmów oraz szczegóły na ich temat.
			</p>
			<p>
				Można również korzystać z wyszukiwarki i zaciągnąć informacje na temat dowolnego filmu. Lista filmów anime studia Ghibli jest stała i nie podlega zmianom.
			</p>
			<p>
				Filmy Ghibli wysyłane są również do podręcznej pamięci przeglądarki - <span className='main_text-deco'>localStorage</span>. Tylko za pierwszym wywołaniem dojdzie do połączenia z Api. Po odświeżeniu strony aplikacja będzie już wyświetlać listę filmów zaciągając je z pamięci localStorage.
			</p>
			<p>
				W zakładce z filmami użyta została tabela <span className='main_text-deco'>rc-table</span> umożliwiająca w szybki i prosty sposób stworzenie funkcjonalnej tabeli. Nawigacja to również komponent reactowy - <span className='main_text-deco'>rc-menu</span>.
			</p>
			</div>
			</div>
		)
	}
}

export {Main};
