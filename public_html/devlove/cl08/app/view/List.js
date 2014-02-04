Ext.define('ContactList.view.List', {
    extend: 'Ext.List',

    xtype: 'contactlist',

    requires: [
        'ContactList.store.Contacts'
    ],

    config: {
        title: '連絡先リスト',
        store: 'Contacts',
        itemTpl: '{last_name} {first_name}',
        grouped: true,
        plugins: [{
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true
        }],
        onItemDisclosure: true,
        disableSelection: true
    }
});
