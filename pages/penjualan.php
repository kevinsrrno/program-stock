<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
</head>

<body>





	<?php

include '../config/crud.php';
$par="jenis_dok,kode_brg,nama_brg,jumlah_jual,tgl_dok,satuan,sawal";
$proses->simpan1("tbl_rekap","$par","'Jual','$_POST[kodebrg]','$_POST[namabrg]','$_POST[bykbrg]','$_POST[tglmsk]','$_POST[satuan]','0'");
 echo "<script language=\"javascript\">alert('Data telah diinput');
	window.location.href = \"../index.php\"
	</script>";


?>
</body>
</html>
