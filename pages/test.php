<?php
  function hitung($string_data)
  {
    // Kode kalian di sini
    $output = $string_data."<br>";
    return $output;
  }

  // TEST CASES
  echo hitung(102*2); //204
  echo hitung(2+3); //5
  echo hitung(100/25); //4
  echo hitung(10%2); //0
  echo hitung(99-2); //97
?>