<?php

$login = $_POST["login"];

if ($login == "leandro") {
    echo json_encode(false);
} else {
    echo json_encode(true);
}