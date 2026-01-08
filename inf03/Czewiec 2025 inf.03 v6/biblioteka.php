<?php
    $id = mysqli_connect("localhost", "root", "", "biblioteka");
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteka miejska</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <header>
        <!-- Skrypt 1 -->
         <?php
            for($i = 0; $i < 20; $i++){
                echo '<img src="obraz.png">';
            }
         ?>
    </header>
    <section class="part1">
        <h2>Liryka</h2>
        <form action="#" method="post">
            <select name="liryka">
                <!-- Skrypt 2 -->
                 <?php
                    $query = "SELECT id, tytul FROM ksiazka WHERE gatunek LIKE 'liryka'";
                    $sql = mysqli_query($id, $query);
                    while($row = mysqli_fetch_array($sql)){
                        $tytul = $row['tytul'];
                        $idopt = $row['id'];
                        echo "<option value='$idopt'>$tytul</option>";
                    }
                 ?>
            </select>
            <input type="submit" value="Rezerwuj" name="subLir">
            <!-- Skrypt 3 -->
             <?php
                if(isset($_POST['subLir'])){
                    $bookId = $_POST['liryka'];
                    $query = "SELECT tytul FROM ksiazka WHERE id = $bookId";
                    $sql = mysqli_query($id, $query);
                    $tytul = mysqli_fetch_row($sql)[0];
                    echo "<p>Książka $tytul została zarezerwowana</p>";
                    $query = "UPDATE ksiazka SET rezerwacja = 1 WHERE id = $bookId";
                    $sql = mysqli_query($id, $query);
                }
             ?>
        </form>
    </section>
    <section class="part2">
        <h2>Epika</h2>
        <form action="#" method="post">
            <select name="epika">
                <!-- Skrypt 2 (epika)-->
                 <?php
                    $query = "SELECT id, tytul FROM ksiazka WHERE gatunek LIKE 'epika'";
                    $sql = mysqli_query($id, $query);
                    while($row = mysqli_fetch_array($sql)){
                        $tytul = $row['tytul'];
                        $idopt = $row['id'];
                        echo "<option value='$idopt'>$tytul</option>";
                    }
                 ?>
            </select>
            <input type="submit" value="Rezerwuj" name="subEpi">
            <!-- Skrypt 3 -->
             <?php
                if(isset($_POST['subEpi'])){
                    $bookId = $_POST['epika'];
                    $query = "SELECT tytul FROM ksiazka WHERE id = $bookId";
                    $sql = mysqli_query($id, $query);
                    $tytul = mysqli_fetch_row($sql)[0];
                    echo "<p>Książka $tytul została zarezerwowana</p>";
                    $query = "UPDATE ksiazka SET rezerwacja = 1 WHERE id = $bookId";
                    $sql = mysqli_query($id, $query);
                }
             ?>
        </form>
    </section>
    <section class="part3">
        <h2>Dramat</h2>
        <form action="#" method="post">
            <select name="dramat">
                <!-- Skrypt 2 (dramat)-->
                 <?php
                    $query = "SELECT id, tytul FROM ksiazka WHERE gatunek LIKE 'dramat'";
                    $sql = mysqli_query($id, $query);
                    while($row = mysqli_fetch_array($sql)){
                        $tytul = $row['tytul'];
                        $idopt = $row['id'];
                        echo "<option value='$idopt'>$tytul</option>";
                    }
                 ?>
            </select>
            <input type="submit" value="Rezerwuj" name="subDra">
            <!-- Skrypt 3 -->
             <?php
                if(isset($_POST['subDra'])){
                    $bookId = $_POST['dramat'];
                    $query = "SELECT tytul FROM ksiazka WHERE id = $bookId";
                    $sql = mysqli_query($id, $query);
                    $tytul = mysqli_fetch_row($sql)[0];
                    echo "<p>Książka $tytul została zarezerwowana</p>";
                    $query = "UPDATE ksiazka SET rezerwacja = 1 WHERE id = $bookId";
                    $sql = mysqli_query($id, $query);
                }
             ?>
        </form>
    </section>
    <section class="part4">
        <h2>Zaległe książki</h2>
        <ul>
            <!-- Skrypt 4 -->
             <?php
                $query = "SELECT tytul, id_cz, data_odd FROM ksiazka JOIN wypozyczenia ON ksiazka.id = wypozyczenia.id_ks ORDER BY data_odd ASC LIMIT 15";
                $sql = mysqli_query($id, $query);
                while($row = mysqli_fetch_array($sql)){
                    $tytul = $row['tytul'];
                    $idCz = $row['id_cz'];
                    $dataOdd = $row['data_odd'];
                    echo "$tytul $idCz $dataOdd <br>";
                }
             ?>
        </ul>
    </section>
    <footer>
        <p><strong>Autor: Berk</strong></p>
    </footer>
</body>
</html>

<?php
    mysqli_close($id);
?>