<?php
    // Połączenie z bazą
    $id = mysqli_connect("localhost", "root", "", "gry");
    if(!$id){
        die("Błąd połączenia: " . mysqli_error($id));
    }
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gry komputerowe</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <h1>Ranking gier komputerowych</h1>
    </header>
    <section class="main">
        <section class="left">
            <h3>Top 5 gier w tym miesiącu</h3>
            <!-- Skrypt 1 -->
                <?php
                    $sql = "SELECT nazwa, punkty FROM gry ORDER BY punkty DESC LIMIT 5";
                    $top5 = mysqli_query($id, $sql);
                ?>
            <ul>
                <?php
                    while($i = mysqli_fetch_array($top5)){
                        echo "<li>" . $i['nazwa'] . " <span class='points'>" . $i['punkty'] . "</span></li>";
                    }
                ?>
            </ul>
            <h3>Nasz sklep</h3>
            <a href="http://sklep.gry.pl">Tu kupisz gry</a>
            <h3>Stronę wykonał</h3>
            <p>Berk</p>
        </section>
        <section class="middle">
            <!-- Skrypt 2 -->
            <?php
                $sql = "SELECT id, nazwa, zdjecie FROM gry";
                $images = mysqli_query($id, $sql);

                while($i = mysqli_fetch_array($images)){
                    echo "<div class='games'>";
                    echo "<img src='pliki1/" . $i['zdjecie'] . "' alt='" . $i['nazwa'] . "' title='" . $i['id'] . "'>";
                    echo "<p>" . $i['nazwa'] . "</p>";
                    echo "</div>";
                }
            ?>
        </section>
        <section class="right">
            <h3>Dodaj nową grę</h3>
            <form action="#" method="post">
                <label>nazwa</label><br><input type="text" name="name"> <br>
                <label>opis</label><br><input type="text" name="desc"> <br>
                <label>cena</label><br><input type="text" name="price"> <br>
                <label>zdjecie</label><br><input type="text" name="img"> <br>
                <input type="submit" value="Dodaj">
                <!-- Skrypt 4 -->
                <?php
                    if(isset($_POST["name"]) && $_POST["name"] != ""){
                        $sql = "INSERT INTO gry (nazwa, opis, punkty, cena, zdjecie) VALUES ('" . $_POST['name'] . "', '" . $_POST['desc'] . "', 0, " . $_POST['price'] . ", '" . $_POST['img'] . "')";
                        mysqli_query($id, $sql);
                    }
                ?>
            </form>
        </section>
    </section>
    <footer>
        <form action="#" method="post">
            <input type="text" name="chosenDescription">
            <input type="submit" value="Pokaż opis">
            <!-- Skrypt 3 -->
            <?php
                if(isset($_POST["chosenDescription"]) && $_POST["chosenDescription"] != ""){
                    $sql = "SELECT nazwa, LEFT(opis, 100), punkty, cena FROM gry WHERE id = " . $_POST['chosenDescription'];
                    $desc = mysqli_query($id, $sql);

                    $i = mysqli_fetch_row($desc);
                    echo "<h2>" . $i[0] . ", " . $i[2] . " punktów, " . $i[3] . "zł" . "</h2>";
                    echo "<p>" . $i[1] . "</p>";
                }
            ?>
        </form>
    </footer>
</body>
</html>

<?php 
    mysqli_close($id);
?>