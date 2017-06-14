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
				Łączy się z API dwóch serwisów: <span className='main_text-deco'><a href='http://tronalddump.io' target='_blank'>tronalddump.io</a></span> i <span className='main_text-deco'><a href='http://ghibliapi.herokuapp.com' target='_blank'>ghibliapi.herokuapp.com</a></span> i wyświetla kolejno cytaty oraz listę filmów.
			</p>
			<p>
				W cytatach można korzystać z wyszukiwarki. Po naciśnięciu przycisku <span className='main_text-deco'>'Dump'</span> aplikacja łączy się z api, zaciągając cytaty na wybrany temat. Renderowane są przyciski <span className='main_text-deco'>'prev next'</span>, oraz liczba stron. Lista filmów jest stała i nie podlega zmianom.
			</p>
			<p>
				Filmy jednak, w odróżnieniu od cytatów, wysyłane są również do podręcznej pamięci przeglądarki - <span className='main_text-deco'>localStorage</span>. Tylko za pierwszym wywołaniem dojdzie do połączenia z Api. Po odświeżeniu strony aplikacja będzie już wyświetlać listę filmów zaciągając je z pamięci localStorage.
			</p>
			<p>
				W zakładce z filmami użyta została tabela <span className='main_text-deco'>rc-table</span> umożliwiająca w szybki i prosty sposób stworzenie funkcjonalnej tabeli. Nawigacja to również komponent reactowy - <span className='main_text-deco'>rc-menu</span>. Wyświetlanie cytatów nie korzysta z żadnych predefiniowanych komponentów i zajęło twórcy najwięcej pupo-godzin :)
			</p>
			</div>
			</div>
		)
	}
}

export {Main};
