import React from 'react';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Witaj, świecie!</h1>
				<p>To jest przykładowa aplikacja napisana w React. Łączy się z API dwóch serwisów: tronalddump.io i ghibliapi.herokuapp.com i wyświetla cytaty i listę wszystkich filmów wytwórni. W cytatach można korzystać z wyszukiwarki. Po naciśnięciu przycisku 'Dump' aplikacja łączy się z api, zaciągając cytaty na wybrany temat. Renderowane są przyciski 'prev next', oraz liczba stron. Lista filmów jest stała i nie podlega zmianom. Filmy jednak, w odróżnieniu od cytatów, wysyłane są również do podręcznej pamięci przeglądarki - localStorage. Tylko za pierwszym wywołaniem dojdzie do połączenia z Api. Po odświeżeniu strony aplikacja będzie już wyświetlać listę filmów zaciągając je z pamięci localStorage. W zakładce z filmami użyta została tabela rc-table umożliwiająca w szybki i prosty sposób stworzenie funkcjonalnej tabeli. Nawigacja to również komponent reactowy - rc-menu. Wyświetlanie cytatów nie korzysta z żadnych predefiniowanych komponentów i zajęło twórcy najwięcej pupo-godzin :)</p>
			</div>
		)
	}
}

export {Main};
