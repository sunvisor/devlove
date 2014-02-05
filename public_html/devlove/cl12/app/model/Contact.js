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
            { name: 'email', type: 'string' },
            { name: 'initial', type: 'string' },
            { name: 'pref', type: 'string'},
            { name: 'add1', type: 'string'},
            { name: 'add2', type: 'string'},
            { name: 'add3', type: 'string'},
            { name: 'add4', type: 'string'},
            { name: 'birthday', type: 'date'}
        ],

        proxy: {
            type: 'ajax',
            //url: 'http://sencha.sunvisor.net/persons.php',
            url: '../../persons.php',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        }

    }
});
