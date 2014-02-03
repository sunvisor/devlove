<?php
require 'connect.php';

//$sql = "SELECT * FROM employee";

$limit = isset($_GET['limit']) ? $_GET['limit'] : 20;
$start = isset($_GET['limit']) ? $_GET['start'] : 1;

// フィルターの処理
if( isset($_GET['filter']) ) {
    $filters = json_decode($_GET['filter']);
    $wheres = array();
    foreach( $filters as $filter ) {
        $wheres[] = "$filter->property = '$filter->value'";
    }
    $where = implode(' AND ', $wheres);
}

// ソートの処理
if( isset($_GET['sort']) ) {
    $sorters = json_decode($_GET['sort']);
    $orders = array();
    foreach ($sorters as $sorter) {
        $orders[] = "$sorter->property $sorter->direction";
    }
    $order = implode(',' ,$orders);
}

$sql = "SELECT SQL_CALC_FOUND_ROWS * FROM persons ";
if( isset($where) ){
    $sql .= " WHERE $where";
}
if( isset($order) ){
    $sql .= " ORDER BY $order";
}

if( $start && $limit ) {
    $sql .= " LIMIT $start, $limit";
}

$result = mysql_query($sql, $link);

$data = array();
while($row = mysql_fetch_array($result, MYSQL_ASSOC)){ 
    $data[] = $row;
}

$sql = "SELECT FOUND_ROWS() count";
$result = mysql_query($sql, $link);
$row = mysql_fetch_row($result, MYSQL_ASSOC);
$count = $row['count'];

$ret = array(
    'data' => $data,
    'total' => $count,
    'success' => true
);

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:x-requested-with');
echo json_encode($ret);
