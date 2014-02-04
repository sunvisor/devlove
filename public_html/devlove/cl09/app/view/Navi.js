Ext.define('ContactList.view.Navi', {
    extend: 'Ext.navigation.View',

    xtype: 'contactnavi',

    requires: [
        'ContactList.view.List'
    ],

    config: {
        items: [{
            xtype: 'contactlist'
        }]
    }
});
