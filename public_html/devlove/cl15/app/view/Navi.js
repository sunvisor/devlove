Ext.define('ContactList.view.Navi', {
    extend: 'Ext.navigation.View',

    xtype: 'contactnavi',

    requires: [
        'ContactList.view.List'
    ],

    config: {
        defaultBackButtonText: '戻る',
        navigationBar: {
            items: [{
                xtype: 'button',
                text: '追加',
                itemId: 'addButton',
                hidden: false,
                align: 'right'
            }, {
                xtype: 'button',
                text: '編集',
                itemId: 'editButton',
                hidden: true,
                align: 'right'
            }, {
                xtype: 'button',
                text: '保存',
                itemId: 'saveButton',
                hidden: true,
                align: 'right'
            }]
        },

        items: [{
            xtype: 'contactlist'
        }]
    }
});
