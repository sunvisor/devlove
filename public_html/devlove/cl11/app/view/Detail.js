Ext.define('ContactList.view.Detail', {

    extend: 'Ext.Panel',

    xtype: 'contactdetail',

    config: {
        styleHtmlContent: true,

        tpl: [
            '<table class="contactlist_detail">',
                '<tr>',
                    '<th>氏名</th>',
                    '<td>{last_name} {first_name}</td>',
                '</tr>',
                '<tr>',
                    '<th>ふりがな</th>',
                    '<td>{last_kana} {first_kana}</td>',
                '</tr>',
                '<tr>',
                    '<th>誕生日</th>',
                    '<td>{birthday:date("Y年m月d日")}</td>',
                '</tr>',
                '<tr>',
                    '<th>性別</th>',
                    '<td>{gender}</td>',
                '</tr>',
                '<tr>',
                    '<th>電話</th>',
                    '<td>{phone}</td>',
                '</tr>',
                '<tr>',
                    '<th>メール</th>',
                    '<td>{email}</td>',
                '</tr>',
                '<tr>',
                    '<th>住所</th>',
                    '<td>{pref}{add1}{add2}</td>',
                '</tr>',
                '<tr>',
                    '<th>住所2</th>',
                    '<td>{add3}{add4}</td>',
                '</tr>',
            '</table>'
        ].join('\n')
    }

});
