Ext.define('ContactList.store.Contacts', {
    extend: 'Ext.data.Store',
    requires: [
        'ContactList.model.Contact'
    ],

    config: {
        model: 'ContactList.model.Contact'
    }
});
