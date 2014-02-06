<?php
require 'connect.php';

$ret = array(
    'success' => false
);

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:x-requested-with');

$id = $_POST['id'];

if( $_POST['birthday'] ) {
    $bd = date('Y-m-d', strtotime($_POST['birthday']));
} else {
    $bd = null;
}

$rec = array(
    'last_name' => $_POST['last_name'],
    'first_name' => $_POST['first_name'],
    'last_kana' => $_POST['last_kana'],
    'first_kana' => $_POST['first_kana'],
    'birthday' => $bd,
    'gender' => $_POST['gender'],
    'email' => $_POST['email'],
    'phone' => $_POST['phone'],
    'pref' => $_POST['pref'],
    'add1' => $_POST['add1'],
    'add2' => $_POST['add2'],
    'add3' => $_POST['add3'],
    'add4' => $_POST['add4']
);

if( substr($id, 0, 3 ) == 'ext' ) {
    $ret = insert($rec);
} else {
    $ret = update($id, $rec);
};
echo json_encode($ret);

function insert($rec) {
    $sql = "
        insert into persons (
            last_name,
            first_name,
            last_kana,
            first_kana,
            birthday,
            gender,
            email,
            phone,
            pref,
            add1,
            add2,
            add3,
            add4
        ) values (
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%s',
            '%s'
        );
    ";
    $query = sprintf(
        $sql,
        $rec['last_name'],
        $rec['first_name'],
        $rec['last_kana'],
        $rec['first_kana'],
        $rec['birthday'],
        $rec['gender'],
        $rec['email'],
        $rec['phone'],
        $rec['pref'],
        $rec['add1'],
        $rec['add2'],
        $rec['add3'],
        $rec['add4']
    );
    if( !mysql_query($query) ) {
        $ret = array(
            'success' => false,
            'error' => mysql_error()
        );
    } else {
        $id = mysql_insert_id();
        $rec['id'] = $id;
        $ret = array(
            'success' => true,
            'data' => $rec
        );
    };
    return $ret;
}

function update($id, $rec) {
    $sql = "
        update persons set
            last_name = '%s',
            first_name = '%s',
            last_kana = '%s',
            first_kana = '%s',
            birthday = '%s',
            gender = '%s',
            email = '%s',
            phone = '%s',
            pref = '%s',
            add1 = '%s',
            add2 = '%s',
            add3 = '%s',
            add4 = '%s'
        where
            id = %s
    ";
    $query = sprintf(
        $sql,
        $rec['last_name'],
        $rec['first_name'],
        $rec['last_kana'],
        $rec['first_kana'],
        $rec['birthday'],
        $rec['gender'],
        $rec['email'],
        $rec['phone'],
        $rec['pref'],
        $rec['add1'],
        $rec['add2'],
        $rec['add3'],
        $rec['add4'],
        $id
    );
    if( !mysql_query($query) ) {
        $ret = array(
            'success' => false,
            'error' => mysql_error()
        );
    } else {
        $rec['id'] = $id;
        $ret = array(
            'success' => true,
            'data' => $rec
        );
    };
    return $ret;
}
