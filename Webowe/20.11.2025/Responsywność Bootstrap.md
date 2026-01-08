1\. Podstawowe pojęcia

Grid system - mechanizm układu oparty na 12 kol. pozwalający tworzyć responsywne layouty - domyślnie projektuje się zgodnie z zasadą: mobile first



<div class="**container**">

&nbsp;	<div class="**row**">

&nbsp;		<div class="**col**">col1</div>

&nbsp;		<div class="**col**">col2</div>

&nbsp;		<div class="**col**">col3</div>

&nbsp;	</div>

</div>



Każdy wiersz dzieli się na 12 "jednostek" szerokości - szerokość kolumn określa się klasami:

* col-1 … col-12 - szerokość kolumny na najmniejszych ekranach (mobile-first)
* col-sm- / col-md- / col-lg- / col-xl- / col-xxl- - szerokość kolumn od danego breakpointu wzwyż



2\. 



Kontenery:

* container - responswyny z marginesem
* container-fluid - pełna szerokość
* container-{breakpoint} - maksymalna wielkość od danego progu



Responsywne klasy:

* d-none, d-md-block - widoczność
* flex-column, flex-md-row - zmiana kierunku flex
* mt-3, mt-lg-0 - odstępy
* text-center, text-md-start - wyrównanie tekstu



Responsywne obrazy:

* img-fluid - automatyczne skalowanie
* Zachowanie proporcji obrazu
* dopasowanie do szerokości kontenera



Responsywna nawigazja:

* navbar-expand-\* - moment rozwinięcia
* navbar-toggler - menu mobilne
* obsługa collapse



Tabele i elemnty szerokie:

* table-responisve - przewijanie w poziomie
* Zapobieganie łamaniu układu
* Dostosowane komponenty Bootstrap



Narzędzia pomocnicze:

* m-, p- - marginesy i odstępy
* justify-content-\*, align-items-\*
* Kolory, obramowania, widoczność
* Reukjca własnego CSS



Relatywne szerokości

* Nie używaj width: 500px
* Stosuj w-100, max-width
* Preferowanie proporcjonalnych wartości





