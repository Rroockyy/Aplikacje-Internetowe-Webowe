<?php
    $conn = mysqli_connect("localhost", "root", "", "piekarnia");
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PIEKARNIA</title>
    <link rel="Stylesheet" href="styles.css">
</head>
<body>
    <img src="wypieki.png" alt="Produkty naszej piekarni">
    <nav>
        <a href="kw1.png">KWERENDA1</a>
        <a href="kw2.png">KWERENDA2</a>
        <a href="kw3.png">KWERENDA3</a>
        <a href="kw4.png">KWERENDA4</a>
    </nav>
    <header>
        <h1>WITAMY</h1>
        <h4>NA STRONIE PIEKARNI</h4>
        <p>Od 31 lat oferujemy najwyższej jakości pieczywo. Naturalnie świeże, naturalnie smaczne. Pieczemy wyłącznie wypieki na naturalnym zakwasie bez polepszaczy i zagęstników. Korzystamy wyłącznie z najlepszych ziaren pochodzących z ekologicznych upraw położonych w rejonach zgierskim i ozorkowskim.</p>
    </header>
    <main>
        <h4>Wybierz rodzaj wypieków:</h4>
        <form action="#" method="post">
            <select name="rodzaj" id="rodzaj">
                <!-- Skrypt 1 -->
                <?php
                    $sql = "SELECT DISTINCT Rodzaj FROM wyroby ORDER BY Rodzaj DESC;";
                    $result = mysqli_query($conn, $sql);
                    while ($row = $result->fetch_assoc()){
                        echo "<option value='" . $row["Rodzaj"] . "'>" . $row["Rodzaj"] . "</option>";
                    }
                ?>
            </select>
            <input type="submit" value="wybierz">
        </form>
        <table>
            <tr>
                <th>Rodzaj</th>
                <th>Nazwa</th>
                <th>Gramatura</th>
                <th>Cena</th>
            </tr>
            <!-- Skrypt 2 -->
            <?php
                $type = $_POST["rodzaj"];
                $sql = "SELECT Rodzaj, Nazwa, Gramatura, Cena FROM wyroby WHERE Rodzaj LIKE '$type';";
                $result = mysqli_query($conn, $sql);
                while ($row = $result->fetch_assoc()){
                    echo "<tr>";
                        echo "<td>" . $row["Rodzaj"] . "</td>";
                        echo "<td>" . $row["Nazwa"] . "</td>";
                        echo "<td>" . $row["Gramatura"] . "</td>";
                        echo "<td>" . $row["Cena"] . "</td>";
                    echo "</tr>";
                }
            ?>
        </table>
    </main>
    <footer>
        <p>AUTOR Berk</p>
        <p>Data: 14.09.2025</p>
    </footer>
</body>
</html>

<?php ?>