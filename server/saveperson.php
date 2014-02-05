<?php
require 'connect.php';

$ret = array(
    'success' => false
);

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:x-requested-with');

if( !isset($_POST['data'])) {
    $ret['error'] = 'Data is not specified.';
    $ret['data'] = array();
    echo json_encode($ret);
    die;
}

$data = json_encode($_POST('data'));

$ret['success'] = true;
$ret['data'] = $data();
echo json_encode($ret);
