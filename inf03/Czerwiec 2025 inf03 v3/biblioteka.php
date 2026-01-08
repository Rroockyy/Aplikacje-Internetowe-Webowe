<?php
    $sql = mysqli_connect("localhost", "root", "", "biblioteka");
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BIBLIOTEKA SZKOLNA</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        STRONA BIBLOTEKI SZKOLNEJ WIEDZAMIN
    </header>
    <section>
        <h3>Nasze dzisiejsze propozycje:</h3>
        <table>
            <tr>
                <th>Autor</th>
                <th>Tytuł</th>
                <th>Katalog</th>
            </tr>
            <!-- Script 1 -->
             <?php
                $query = mysqli_query($sql, "SELECT autor, tytul, kod FROM ksiazki ORDER BY rand() LIMIT 5");
                while($row = mysqli_fetch_array($query)){
                    echo "<tr><td>" . $row['autor'] . "</td><td>" . $row['tytul'] . "</td><td>" . $row['kod'] . "</td></tr>";
                }
             ?>
        </table>
    </section>
    <main>
        <article class="art1">
            <img src="pliki12/ksiazka1.jpeg" alt="okładka książki">
            <p>Według różnych podań najpaskudniejsza ropucha nosi w głowie piękny, cenny klejnot.</p>
        </article>
        <article class="art2">
            <img src="pliki12/ksiazka2.jpeg" alt="okładka książki">
            <p>Panna Stefcia i Maryla nie są to zbyt grzeczne damy, nawet nie słuchają mamy...</p>
        </article>
        <article class="art3">
            <img src="pliki12/ksiazka3.jpeg" alt="okładka książki">
            <p>Ratuj mnie, przyjacielu, w ostatniej potrzebie: Kocham piękną Irenę. Rodzice i ona...</p>
        </article>
    </main>
    <footer>
        Stronę wykonał: Berk
    </footer>
</body>
</html>

<?php
    mysqli_close($sql);
?>