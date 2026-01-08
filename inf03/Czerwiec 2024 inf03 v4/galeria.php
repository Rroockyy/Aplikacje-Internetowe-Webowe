<?php
    $id = mysqli_connect("localhost", "root", "", "galeria");
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h1>Zdjęcia</h1>
    </header>
    <section class="main">
        <section class="left">
            <h2>Tematy zdjęć</h2>
            <ol>
                <li>Zwierzęta</li>
                <li>Krajobrazy</li>
                <li>Miasta</li>
                <li>Przyroda</li>
                <li>Samochody</li>
            </ol>
        </section>
        <section class="middle">
            <!-- Skrypt 1 -->
             <?php
                $sql = "SELECT plik, tytul, polubienia, autorzy.imie, autorzy.nazwisko FROM zdjecia JOIN autorzy ON zdjecia.autorzy_id = autorzy.id ORDER BY autorzy.nazwisko ASC";
                $img = mysqli_query($id, $sql);
                while ($row = mysqli_fetch_array($img)) {
                    echo "<div class='block'>";
                    echo "<img src='pliki/" . $row['plik'] . "' alr='zdjęcie'>";
                    echo "<h3>" . $row['tytul'] . "</h3>";
                    if($row['polubienia'] > 40){
                        echo "<p>Autor: " . $row['imie'] . " " . $row['nazwisko'] . ".<br> Wiele osób polubiło ten obraz</p>";
                    }
                    else{
                        echo "<p>Autor: " . $row['imie'] . " " . $row['nazwisko'] . "</p>";
                    }
                    echo "<a href='" . $row['plik'] . "' download='" . $row['plik'] . "'>Pobierz</a>";
                    echo "</div>";
                }
             ?>
        </section>
        <section class="right">
            <h2>Najbardziel lubiane</h2>
            <!-- Skrypt 2 -->
            <?php
                $sql = "SELECT tytul, plik FROM zdjecia WHERE polubienia >= 100";
                $liked = mysqli_query($id, $sql);
                while ($row = mysqli_fetch_array($liked)) {
                    echo "<img src='pliki/" . $row['plik'] . "' alt='" . $row['tytul'] ."'></img>";
                }
            ?>
            <strong>Zobacz wszystkie nasze zdjęcia</strong>
        </section>
    </section>
    <footer>
        <h5>Stronę wykonał: Berk</h5>
    </footer>
</body>
</html>

<?php
    mysqli_close($id);
?>