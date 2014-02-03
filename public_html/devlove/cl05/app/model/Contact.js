Ext.define('ContactList.model.Contact', {
    extend: 'Ext.data.Model',

    config: {

        fields: [
            { name: 'last_name', type: 'string' },
            { name: 'first_name', type: 'string' },
            { name: 'last_kana', type: 'string' },
            { name: 'first_kana', type: 'string' },
            { name: 'gender', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'email', type: 'string' }
        ],

        proxy: {
            type: 'ajax',
            url: 'http://sencha.sunvisor.net/persons.php',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }

    }
});
