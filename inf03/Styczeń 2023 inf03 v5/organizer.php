<?php
    $sql = mysqli_connect("localhost", "root", "", "kalendarz");
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sierpniowy kalendarz</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
    <header>
        <header id="head1">
            <h1>Organizer: SIERPIEŃ</h1>
        </header>
        <header id="head2">
            <form action="#" method="post">
                <label>Zapisz wydarzenie: </label><input type="text" name="input">
                <input type="submit" value="OK" name="submit">
            </form>
            <?php
                if(isset($_POST['submit'])){
                    $input = $_POST['input'];
                    $query = "UPDATE zadania SET wpis = '" . $input . "' WHERE dataZadania = '2020-08-09'";
                    $result = mysqli_query($sql, $query);
                }
            ?>
        </header>
        <header id="head3">
            <img src="pliki/logo2.png" alt="sierpień">
        </header>
    </header>
    <main>
        <!-- Skrypt 1 -->
        <?php
            $query = "SELECT dataZadania, wpis FROM zadania WHERE miesiac LIKE 'sierpien'";
            $result = mysqli_query($sql, $query);
            while($row = mysqli_fetch_array($result)){
                echo "<Section class='cal'><h5>" . $row['dataZadania'] . "</h5><p>" . $row["wpis"] . "</p></Section>";
            }
        ?>
    </main>
    <footer>
        <p>Stronę wykonał: Berk</p>
    </footer>
</body>
</html>

<?php
    mysqli_close($sql);
?>