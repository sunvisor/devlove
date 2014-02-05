Ext.define('ContactList.view.List', {
    extend: 'Ext.List',

    xtype: 'contactlist',

    requires: [
        'ContactList.store.Contacts',
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],

    config: {
        title: '連絡先リスト',
        store: 'Contacts',
        itemTpl: '{last_name} {first_name}',
        grouped: true,
        plugins: [{
            xclass: 'Ext.plugin.ListPaging',
            autoPaging: true
        },{
            xclass: 'Ext.plugin.PullRefresh'
        }],
        onItemDisclosure: true,
        disableSelection: true
    }
});
