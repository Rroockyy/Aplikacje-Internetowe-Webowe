<?php
    $id = mysqli_connect("localhost", "root", "", "przewozy");
    if(isset($_GET['idRow'])){
        $query = "DELETE FROM zadania WHERE id_zadania = " . $_GET['idRow'];
        mysqli_query($id, $query);
    }
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firma Przewozowa</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Firma przewozowa Półdarmo</h1>
    </header>
    <nav>
        <a href="kw1.png">kwerenda1</a>
        <a href="kw2.png">kwerenda2</a>
        <a href="kw3.png">kwerenda3</a>
        <a href="kw4.png">kwerenda4</a>
    </nav>
    <main>
        <section class="left">
            <h2>Zadania do wykonania</h2>
            <table>
                <tr>
                    <th>Zadanie do wykonania</th>
                    <th>Data realizacji</th>
                    <th>Akcja</th>
                </tr>
                <!-- Skrypt 1 -->
                <?php
                    $sql = "SELECT id_zadania, zadanie, data FROM zadania";
                    $query = mysqli_query($id, $sql);
                    while($row = mysqli_fetch_array($query)){
                        echo "<tr><td>" . $row['zadanie'] . "</td><td>" . $row['data'] . "</td><td><a href='przewozy.php?idRow=" . $row['id_zadania'] . "'>usuń</a></td></tr>";
                    }
                ?>
            </table>
            <form action="#" method="post">
                <label for="task">Zadanie do wykonania: </label><input type="text" id="task" name="task"><br>
                <label for="date">Data realizacji: </label><input type="date" id="date" name="date">
                <input type="submit" value="Dodaj" name="sub">
                <!-- Skrypt 2 -->
                <?php
                    if(isset($_POST['sub'])){
                        $task = $_POST['task'];
                        $date = $_POST['date'];
                        $sql = "INSERT INTO zadania (zadanie, data, osoba_id) VALUES ('" . $task . "', '" . $date . "', 1)";
                        $query = mysqli_query($id, $sql);
                        header("location: przewozy.php");
                    }
                ?>
            </form>
        </section>
        <section class="right">
            <img src="pliki11/auto.png" alt="auto firmowe">
            <h3>Nasza specjalność</h3>
            <ul>
                <li>Przeprowadzki</li>
                <li>Przewóz mebli</li>
                <li>Przesyłki gabarytowe</li>
                <li>Wynajem pojazdów</li>
                <li>Zakupy towarów</li>
            </ul>
        </section>
    </main>
    <footer>
        <p>Stronę wykonał: Berk</p>
    </footer>
</body>
</html>

<?php
    mysqli_close($id);
?>