Ext.define('ContactList.view.Navi', {
    extend: 'Ext.navigation.View',

    xtype: 'contactnavi',

    requires: [
        'ContactList.view.List'
    ],

    config: {

        navigationBar: {
            items: [{
                xtype: 'button',
                text: '追加',
                itemId: 'addButton',
                hidden: false,
                align: 'right'
            }]
        },

        items: [{
            xtype: 'contactlist'
        }]
    }
});
