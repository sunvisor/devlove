Ext.define('ContactList.store.Contacts', {
    extend: 'Ext.data.Store',
    requires: [
        'ContactList.model.Contact'
    ],

    config: {
        model: 'ContactList.model.Contact',
        sorters: ['last_kana', 'first_kana'],
        remoteSort: true,
        grouper: {
            property: 'initial'
        }
    }
});
